import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { ahrefResponseObject, textResponseObject } from "../types/types";
import { fetchBackend, fetchText } from "../Api/Api";
import bgImage from "../Backgrounds/bg22.png";

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
  // Separate states for text and ahref response objects
  const [textData, setTextData] = useState<textResponseObject>([]); // Correct type for text data
  const [linkData, setLinkData] = useState<ahrefResponseObject[]>([]); // Correct type for links
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
      if (searchTarget === "paragraphs") {
        return await fetchText(base_url, searchTarget, search_word); // Returns textResponseObject[]
      } else {
        return await fetchBackend(base_url, searchTarget, search_word); // Returns ahrefResponseObject[]
      }
    },
    onSuccess: (responseData) => {
      console.log("Results...." + responseData)
      if (Array.isArray(responseData) && responseData[0] && 'url' in responseData[0]) {
       
        setLinkData(responseData as ahrefResponseObject[]);
      } else {
       
        setTextData(responseData as textResponseObject);
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

  const isParagraphMode = searchTarget === "paragraph";

  return (
    <div
      className="h-screen flex flex-col gap-4 p-4 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "200px",
        backgroundPosition: "center 160px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 w-full flex flex-col gap-4 p-4">
        <div className="text-left text-black">
          {mutation.isPending ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-lg text-green-600 font-semibold">
                Scanning...
              </p>
            </div>
          ) : linkData.length > 0 || textData.length > 0 ? (
            // Render links if linkData is not empty, otherwise render paragraphs
            isParagraphMode
              ? textData.map((item, index) => (
                  <div key={index} className="bg-white shadow-md rounded p-4 my-2 border border-gray-300">
                    <p className="text-gray-800">{item.text}</p>
                  </div>
                ))
              : linkData.map((item, index) => (
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
          ) : scanTriggered ? (
            <p>No results found</p>
          ) : (
            <p className="italic text-sm">
              Search any domain with custom search word, scanning for optional
              targets...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
