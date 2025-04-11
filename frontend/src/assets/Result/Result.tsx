import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ahrefResponseObject, textResponseObject } from "../types/types";
import { fetchBackend, fetchText } from "../Api/Api";

// import bgImage from "../Backgrounds/bg22.png";

interface Props {
  url: string;
  searchTarget: string;
  clear: boolean;
  searchWord: string;
  fetchKey: number;
}

export default function Result({
  url,
  searchTarget,
  searchWord,
  fetchKey,
  clear,
}: Props) {
  
  const [textData, setTextData] = useState<textResponseObject>([]); 
  const [linkData, setLinkData] = useState<ahrefResponseObject[]>([]); 
  const [scanTriggered, setScanTriggered] = useState(false);

  const mutation = useMutation({
    mutationFn: async ({
      base_url,
      searchTarget,
      search_word,
    }: {
      base_url: string;
      searchTarget: string;
      search_word: string;
    }) => {
      if (searchTarget === "paragraphs" || searchTarget === "headings") {
        return await fetchText(base_url, searchTarget, search_word);
      } else {
        return await fetchBackend(base_url, searchTarget, search_word);
      }
    },
    onSuccess: (responseData) => {
      console.log("Results....", responseData);

      // Case 1: If responseData is an array of objects with "url", it's a link (ahrefResponseObject)
      if (
        Array.isArray(responseData) &&
        responseData.length > 0 &&
        typeof responseData[0] === "object" &&
        "url" in responseData[0]
      ) {
        setLinkData(responseData as ahrefResponseObject[]); 
      } 
      
    
      else if (Array.isArray(responseData) && typeof responseData[0] === "string") {
        const textResponse: textResponseObject = responseData.map((text) => ({ text })); 
        setTextData(textResponse); 
      }
      
 
      else if (
        Array.isArray(responseData) &&
        responseData.length > 0 &&
        typeof responseData[0] === "object" &&
        "text" in responseData[0]
      ) {
        setTextData(responseData as textResponseObject); 
      } else {
        console.warn("Unexpected response format:", responseData);
        setTextData([]); 
        setLinkData([]); 
      }
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
    },
  });

  useEffect(() => {
    if (clear) {
      setTextData([]);
      setLinkData([]);
    }
  }, [clear]);

  useEffect(() => {
    if (fetchKey > 0) {
      setScanTriggered(true);
      mutation.mutate({
        base_url: url,
        searchTarget,
        search_word: searchWord,
      });
    }
  }, [fetchKey]);

  const isTextMode = searchTarget === "paragraphs" || searchTarget === "headings";

  return (
    <div
      className="h-screen flex flex-col gap-4 p-4 relative"
      // style={{
      //   backgroundImage: `url(${bgImage})`,
      //   backgroundSize: "200px",
      //   backgroundPosition: "center 160px",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
    
      
      <div className="relative z-10 w-full flex flex-col gap-4 p-4">
        <div className="text-left text-black">
          {mutation.isPending ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-16 h-16 border-4 border-info border-t-transparent rounded-full animate-spin"></div>
              <p className="text-lg text-info font-semibold">Scanning...</p>
            </div>
          ) : linkData.length > 0 || textData.length > 0 ? (
            isTextMode ? (
              
              textData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded p-4 my-2 border border-gray-300"
                >
                  <p className="text-gray-800">{item.text}</p> {/* Access the 'text' here */}
                </div>
              ))
            ) : (
              linkData.map((item, index) => (
                <div key={index} className="border-b border-gray-300 p-2">
                  <div>
                    <strong>Text:</strong> {item.text}
                  </div>
                  <div>
                    <strong>URL:</strong>{" "}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full overflow-hidden text-ellipsis"
                    >
                      {item.url}
                    </a>
                  </div>
                  <br />
                  <br />
                </div>
              ))
            )
          ) : scanTriggered ? (
            <p>No results found</p>
          ) : (
            <p className="italic text-sm">
              Search any domain with custom search word, scanning for optional targets...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
