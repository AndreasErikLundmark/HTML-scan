export default function Input() {
  return (
    <>
      <div className="flex flex-row gap-4 p-4">
        <label className="input">
          URL
          <input
            type="text"
            className="grow h-12 pl-10"
            placeholder=" https://.."
          />{" "}
          {/* Added padding-left for spacing */}
        </label>

        <label className="input relative">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 opacity-50"
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
            className="grow h-12 pl-10"
            placeholder="Search word"
          />
        </label>

        <button className="btn btn-primary">Scan</button>
      </div>
      <div className="buttonContainer border-b border-color-200">
        <h4 className="text-xs text-bold ml-4">Target search</h4>

        <div className="flex flex-row gap-4 p-4">
          <label htmlFor="radio-1" className="flex items-center gap-2">
            <input
              id="radio-1"
              type="radio"
              name="radio-4"
              className="radio radio-primary"
              defaultChecked
            />
            Links..
          </label>

          <label htmlFor="radio-2" className="flex items-center gap-2">
            <input
              id="radio-2"
              type="radio"
              name="radio-4"
              className="radio radio-primary"
            />
            Headings..
          </label>
          <label htmlFor="radio-2" className="flex items-center gap-2">
            <input
              id="radio-2"
              type="radio"
              name="radio-4"
              className="radio radio-primary"
            />
            Paragraphs..
          </label>
        </div>
      </div>
    </>
  );
}
