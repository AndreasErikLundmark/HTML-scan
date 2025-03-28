// import { ahrefResponse } from "../types/types";

const GET_URL = "http://127.0.0.1:8000/articles/";

export const fetchAhrefs = async (
  base_url: string,
  search_word: string
): Promise<string> => {
  const encodedBaseUrl = encodeURIComponent(base_url);
  const encodedSearchWord = encodeURIComponent(search_word);
  const urlWithParams = `${GET_URL}?base_url=${encodedBaseUrl}&search_word=${encodedSearchWord}`;

  try {
    const response = await fetch(urlWithParams, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch aHrefs. Status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error("Error fetching aHrefs:", error);
    throw error;
  }
};
