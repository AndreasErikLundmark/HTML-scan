import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { ahrefResponseObject } from "../types/types";
import { fetchAhrefs } from "../Api/fetchAhrefs";

interface Props {
  url: string;
  searchWord: string;
  triggerFetch: boolean;
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

export default function Result({ url, searchWord, triggerFetch }: Props) {
  const [scannedRefs, setScannedRefs] = useState<ahrefResponseObject[]>([]);
  const mutation = useFetchAhrefsMutation(setScannedRefs);

  useEffect(() => {
    if (triggerFetch) {
      mutation.mutate({ base_url: url, search_word: searchWord });
    }
  }, [triggerFetch]);

  return (
    <div className="h-auto flex flex-col gap-4 p-4 border-t border-base-200">
      <div className="relative z-10 w-full flex flex-col gap-4 p-4">
        <div className="text-left text-black">
          {scannedRefs.length > 0 ? (
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
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}
