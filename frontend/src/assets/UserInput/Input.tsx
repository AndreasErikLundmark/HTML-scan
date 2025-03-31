import { useState } from "react";
import Result from "../Result/Result";

export default function Input() {
  const [url, setUrl] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [triggerFetch, setTriggerFetch] = useState(false);

  const scanHandler = () => {
    console.log("Scanning with:", { url, searchWord });
    setTriggerFetch((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-row gap-4 p-4 mt-3">
        <label className="input">
          URL
          <input
            type="text"
            className="grow h-12 pl-10 "
            placeholder="https://.."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>

        <label className="input relative">
          <svg
            className="absolute h-10 left-3 top-1/2 transform -translate-y-1/2 h-5 opacity-50 shadow-sm"
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
          className="h-10 btn btn-primary shadow-sm"
          onClick={scanHandler}
        >
          Scan
        </button>
      </div>
      <div
        className="ml-1 buttonContainer border-b-2 border-gray-300" // Added border and color here
        style={{
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", // Box-shadow for bottom border
        }}
      >
        <h4 className="text-xs text-bold ml-4">Scan targets</h4>

        <div className="flex flex-row gap-4 p-4">
          <label htmlFor="radio-1" className="flex items-center gap-2 text-sm ">
            <input
              id="radio-1"
              type="radio"
              name="radio-4"
              className="radio radio-primary shadow-sm size-4"
              defaultChecked
            />
            Links
          </label>

          <label htmlFor="radio-2" className="flex items-center gap-2 text-sm">
            <input
              id="radio-2"
              type="radio"
              name="radio-4"
              className="radio radio-primary shadow-sm size-4"
            />
            Headings
          </label>
          <label htmlFor="radio-2" className="flex items-center gap-2 text-sm">
            <input
              id="radio-2"
              type="radio"
              name="radio-4"
              className="radio radio-primary shadow-sm size-4"
            />
            Paragraphs
          </label>
        </div>

        <Result url={url} searchWord={searchWord} triggerFetch={triggerFetch} />
      </div>
    </>
  );
}
