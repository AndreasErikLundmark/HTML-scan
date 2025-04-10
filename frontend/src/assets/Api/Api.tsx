import { ahrefResponseObject, textResponseObject } from "../types/types";

const GET_URL = "http://34.59.91.18/";

export const fetchBackend = async (
  base_url: string,
  search_target: string,
  search_word: string
): Promise<ahrefResponseObject[]> => {
  const encodedBaseUrl = encodeURIComponent(base_url);
  
  let encodedSearchTarget = search_target.toLowerCase();
  encodedSearchTarget = encodeURIComponent(encodedSearchTarget);
  const encodedSearchWord = encodeURIComponent(search_word);
  console.log("encodedSearchtarget: " + encodedSearchTarget);
 
  const urlWithParams = `${GET_URL}${encodedSearchTarget}/?base_url=${encodedBaseUrl}&search_word=${encodedSearchWord}`;

  // const urlWithParams = `${GET_URL}?base_url=${encodedBaseUrl}&search_target=${encodedSearchTarget}&search_word=${encodedSearchWord}`;
  console.log("calling with this: " + urlWithParams)
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

    return await response.json();
  } catch (error) {
    console.error("Error fetching aHrefs:", error);
    throw error;
  }
};

export const fetchText = async (
  base_url: string,
  search_target: string,
  search_word: string
): Promise<textResponseObject[]> => {
  const encodedBaseUrl = encodeURIComponent(base_url);
  let encodedSearchTarget = search_target.toLowerCase();
  encodedSearchTarget = encodeURIComponent(encodedSearchTarget);
  const encodedSearchWord = encodeURIComponent(search_word);

  const urlWithParams = `${GET_URL}${encodedSearchTarget}/?base_url=${encodedBaseUrl}&search_word=${encodedSearchWord}`;

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

    return await response.json();
  } catch (error) {
    console.error("Error fetching aHrefs:", error);
    throw error;
  }
};
