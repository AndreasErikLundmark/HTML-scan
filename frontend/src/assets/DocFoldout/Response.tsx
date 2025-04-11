interface Props {
    imgUrl: string;
    width?: string;  // Optional width
    height?: string; // Optional height
  }
  
  export default function Response({ imgUrl, width = "80%", height = "auto" }: Props) { 
    return (
      <div>
        <img
          src={imgUrl}
          alt="Response Image"
          style={{ width: width, height: height }}  
        />
      </div>
    );
  }
  