interface Props {
    info: string
    title : string

}

export default function DocFoldOut({info, title}:Props){


return (
    <div className="p-3"> 
        <h3 className="text-xs font-bold ml-4 pt-4 pb-2">{info}</h3>
    
    <div className="bg-base-100 border-base-300 collapse border">
   
  <input type="checkbox" className="peer " />
  <div
    className="collapse-title bg-success bg-opacity-50 text-black peer-checked:bg-secondary peer-checked:text-secondary-content"
  >
    {title}
    </div>
  <div
    className="collapse-content bg-primary bg-opacity-50 rounded-b-xl text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
  >
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
</div>

)

}