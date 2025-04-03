import icon from "../../assets/Icons/bg4.png";
import { FaInfo } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar bg-base-300 bg-base-100 shadow-sm">
      <div className="flex-1">
        <img className="w-10 h-11" src={icon} alt="Icon" />
        <a className="btn btn-ghost text-xl">Web Scraper UI</a>
        <p className="text-xl">|</p>
        <a className="btn btn-ghost text-xl"> API doc</a>
      </div>
      <div className="flex-none mr-4">
        {/* <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>{" "}
          </svg>
        </button> */}

        <FaInfo />
      </div>
    </div>
  );
}
