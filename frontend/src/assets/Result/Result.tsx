import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { ahrefResponseObject } from "../types/types";
import { fetchAhrefs } from "../Api/fetchAhrefs";
import bgImage from "../Backgrounds/bg22.png";

interface Props {
  url: string;
  searchWord: string;
  fetchKey: number; // Use fetchKey instead of triggerFetch
}

const useFetchAhrefsMutation = (
  setScannedRefs: React.Dispatch<React.SetStateAction<ahrefResponseObject[]>>
) => {
  return useMutation({
    mutationFn: ({
      base_url,
      search_word,
    }: {
      base_url: string;
      search_word: string;
    }) => fetchAhrefs(base_url, search_word),
    onSuccess: (data) => {
      setScannedRefs(data);
      console.log("Fetched articles:", data);
    },
    onError: (error) => {
      console.error("Error fetching articles:", error);
    },
  });
};

export default function Result({ url, searchWord, fetchKey }: Props) {
  const [scannedRefs, setScannedRefs] = useState<ahrefResponseObject[]>([]);
  const [scanTriggered, setScanTriggered] = useState(false);
  const mutation = useFetchAhrefsMutation(setScannedRefs);

  useEffect(() => {
    if (fetchKey > 0) {
      setScanTriggered(true);
      mutation.mutate({ base_url: url, search_word: searchWord });
    }
  }, [fetchKey]); // Triggers fetch on every change

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
          ) : null}
        </div>
      </div>
    </div>
  );
}
