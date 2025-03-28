import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import bg2 from "../../assets/Backgrounds/bg2.png";
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
    <div
      className="w-[400px] h-[400px] opacity-5 flex flex-col gap-4 p-4 border-t border-base-200 items-center absolute left-1/2 top-[280px] transform -translate-x-1/2"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        onClick={() =>
          mutation.mutate({ base_url: url, search_word: searchWord })
        }
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Fetching..." : "Fetch Articles"}
      </button>

      <div>
        {scannedRefs.length > 0 ? (
          scannedRefs.map((ref, index) => (
            <div key={index}>
              <a href={ref.url} target="_blank" rel="noopener noreferrer">
                {ref.text}
              </a>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
