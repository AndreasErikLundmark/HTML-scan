import Dot from "../visual/Dot"
import TableFold from "./TableFold"
import linkPic from "../images/linkspostman.png"
import paraPic from "../images/paragraphpostman.png"
import Response from "./Response"

interface Props {
    info: string
    title : string

}

export default function DocFoldOut({info, title}:Props){


return (
    <div className="p-3"> 
        {/* <h3 className="text-xs font-bold ml-4 pt-4 pb-2">{info}</h3> */}
    
    <div className="bg-base-100 border-base-300 collapse border">
   
  <input type="checkbox" className="peer " />
  <div
    className="collapse-title
     peer-checked:bg-base-200 peer-checked:text-black"
  > 
  <div className="flex items-center gap-3 text-s font-bold text-black border-spacing-1">
  <Dot color="bg-info" size="w-3 h-3" animate  />
    {info}
    </div>
    </div>
  <div
    className="collapse-content rounded-b-xs text-blue-950 peer-checked:bg-base-200 peer-checked:text-black"
  >
    <div className="flex bg-base-300 rounded-md p-2 items-center">
    <p className="text-bold">GET [BACKEND_URL]{title}/?base_url=[DOMAIN_URL]&search_word=[SEARCH_WORD]
    </p>
    </div>

    <TableFold/>
    
    <div className="w-full mt-4 text-xs">
        {title === "/links..." ? (
                    <><p className="p-4">Response example: JSON array with objects containing "text" and "url" fields.</p><Response imgUrl={linkPic} width="60%" height="auto" /></>
            ) : (
                
                <><p className="p-4">Response example: JSON array of strings.</p><Response imgUrl={paraPic} width="60%" height="auto" /></>
            )}
</div>

    


  </div>
</div>
</div>

)

}