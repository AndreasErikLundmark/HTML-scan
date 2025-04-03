import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { ahrefResponseObject } from "../types/types";
import { fetchBackend } from "../Api/Api";
import bgImage from "../Backgrounds/bg22.png";

interface Props {
  url: string;
  searchTarget: string;
  clear: boolean;
  searchWord: string;
  fetchKey: number;
}

const useFetchAhrefsMutation = (
  setScannedRefs: React.Dispatch<React.SetStateAction<ahrefResponseObject[]>>
) => {
  return useMutation({
    mutationFn: ({
      base_url,
      searchTarget,
      search_word,
    }: {
      base_url: string;
      searchTarget: string;
      search_word: string;
    }) => fetchBackend(base_url, searchTarget, search_word),
    onSuccess: (data) => {
      setScannedRefs(data);
      console.log("Fetched articles:", data);
    },
    onError: (error) => {
      console.error("Error fetching articles:", error);
    },
  });
};

export default function Result({ url, searchWord, fetchKey, clear }: Props) {
  const [scannedRefs, setScannedRefs] = useState<ahrefResponseObject[]>([]);
  const [scanTriggered, setScanTriggered] = useState(false);
  const mutation = useFetchAhrefsMutation(setScannedRefs);

  useEffect(() => {
    if (clear) {
      setScannedRefs([]);
    }
  }, [clear]);

  useEffect(() => {
    if (fetchKey > 0) {
      setScanTriggered(true);
      mutation.mutate({
        base_url: url,
        searchTarget: "",
        search_word: searchWord,
      });
    }
  }, [fetchKey]);

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
          ) : scannedRefs.length > 0 ? (
            scannedRefs.map((ref, index) => (
              <div key={index}>
                <div>
                  <strong>Text:</strong> {ref.text}
                </div>
                <div className="border-b border-gray-300 p-2">
                  <strong>URL:</strong>{" "}
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full overflow-hidden text-ellipsis"
                  >
                    {ref.url}
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
              targets..
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
