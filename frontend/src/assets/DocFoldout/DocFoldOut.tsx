import Dot from "../visual/Dot"
import TableFold from "./TableFold"

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
    <div className="bg-blue-100 rounded-md p-2 items-center">
    <p className="mb-2 text-bold">GET [BACKEND_URL]{title}/?base_url=[DOMAIN_URL]&search_word=[SEARCH_WORD]
    </p>
    </div>

    <TableFold/>


  </div>
</div>
</div>

)

}