import icon from "../../assets/Icons/bg4.png";
import { FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <img className="w-10 h-11" src={icon} alt="Icon" />
        <Link className="btn btn-active border-none text-xl no-underline hover:underline bg-transparent hover:bg-transparent transition-all duration-300" to="/">Web Searcher UI</Link>  
        <p className="text-xl">|</p>
        <Link   className="btn btn-active border-none text-xl no-underline hover:underline bg-transparent hover:bg-transparent transition-all duration-300"
 to="/doc">API doc</Link>  
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
         
         <Link className="border-none bg-transparent hover:text-xl transition-all duration-300" to="/info"> <FaInfo /></Link>  
       
        
      </div>
    </div>
  );
}
