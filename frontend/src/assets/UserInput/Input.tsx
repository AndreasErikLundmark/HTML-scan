import { useState, useEffect } from "react";
import Result from "../Result/Result";
import { CiSquareRemove } from "react-icons/ci";

export default function Input() {
  const [url, setUrl] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [triggerClear, setTriggerClear] = useState(false);
  const [searchTarget, setSearchTarget] = useState("links");

  const [fetchKey, setFetchKey] = useState(0);

  const scanHandler = () => {
    if (!url || !searchWord) {
      console.log("URL or search word is empty");
      alert("URL or search word is empty");
      return;
    }
    console.log("Scanning with:", { url, searchWord });
    setFetchKey((prev) => prev + 1); // Always increment, ensuring a re-fetch
  };

  const handleUrl = (newUrl: string) => {
    // Check if the URL starts with "https://", otherwise prepend it
    if (!newUrl.startsWith("https://")) {
      setUrl("https://" + newUrl);
    } else {
      setUrl(newUrl);
    }
  };

  const handleSearchTarget = (target: string) => {
    setSearchTarget(target);
  };

  const handleClear = () => {
    setTriggerClear(true);
    setUrl("");
    setSearchWord("");
    setTimeout(() => {
      setTriggerClear(false); 
    }, 100);
  };

  // UseEffect hook to log the value of searchTarget after state updates
  useEffect(() => {
    console.log("Updated searchTarget:", searchTarget);
  }, [searchTarget]);

  return (
    <>
      <div className="flex items-center gap-4 p-4 mt-3 w-full whitespace-nowrap overflow-hidden">
        <label className="input">
          URL
          <input
            type="text"
            className="grow h-12 pl-10"
            placeholder="https://.."
            value={url}
            onChange={(e) => handleUrl(e.target.value)}
          />
        </label>

        <label className="input relative">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 opacity-50 shadow-sm"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow h-12 pl-10 shadow-sm"
            placeholder="Search word"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </label>

        <button
          className="h-10 btn btn-success shadow-sm rounded-xl"
          onClick={scanHandler}
        >
          Scan
        </button>
      </div>
      <div
        className="ml-1 buttonContainer" 
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
        }}
      >
        <h4 className="text-xs text-bold ml-4">Scan targets</h4>

        <div className="flex flex-row gap-4 p-4">
          <label htmlFor="radio-1" className="flex items-center gap-2 text-sm">
            <input
              id="radio-1"
              type="radio"
              name="radio-4"
              className="radio radio-primary shadow-sm size-4"
              checked={searchTarget === "links"} // Check if 'links' is selected
              onChange={() => handleSearchTarget("links")}
            />
            Links
          </label>

          <label htmlFor="radio-2" className="flex items-center gap-2 text-sm">
            <input
              id="radio-2"
              type="radio"
              name="radio-4"
              className="radio radio-primary shadow-sm size-4"
              checked={searchTarget === "headings"} // Check if 'headings' is selected
              onChange={() => handleSearchTarget("headings")}
            />
            Headings
          </label>

          <label htmlFor="radio-3" className="flex items-center gap-2 text-sm">
            <input
              id="radio-3"
              type="radio"
              name="radio-4"
              className="radio radio-primary shadow-sm size-4"
              checked={searchTarget === "paragraphs"} // Check if 'paragraphs' is selected
              onChange={() => handleSearchTarget("paragraphs")}
            />
            Paragraphs
          </label>

          <button
            className="absolute top-[185px] right-2 h-5 w-25 text-sm rounded-xl bg-transparent shadow-none"
            onClick={handleClear}
          >
            <div className="flex items-center gap-1 p-1 text-red-500 hover:text-gray-900 text-bold">
              Clear
              <CiSquareRemove className="text-xl text-bold" />
            </div>
          </button>
        </div>
      </div>

      <Result
        url={url}
        searchTarget={searchTarget}
        clear={triggerClear}
        searchWord={searchWord}
        fetchKey={fetchKey}
      />
    </>
  );
}
