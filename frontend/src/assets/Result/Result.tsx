import bg2 from "../../assets/Backgrounds/bg2.png";
import { ahrefResponse } from "../types/types";

export default function Result() {
  const [scannedRefs, setScannedRefs] = useState<ahrefResponseObject[]>([]);

  const displayRefs: ahrefResponse[] = scannedRefs.map(
    (ahrefResponseObject) => {
      return {
        text: ahrefResponseObject.text,
        url: ahrefResponseObject.url,
      };
    }
  );

  return (
    // <div className="flex items-center justify-center w-screen h-screen">
    <div
      className="w-[400px] h-[400px] opacity-5 flex flex-col gap-4 p-4 border-t border-base-200 items-center absolute left-1/2 top-[280px] transform -translate-x-1/2"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        {scannedRefs.length > 0 ? (
          scannedRefs.map((ref, index) => (
            <div key={index}>
              <a href={ref.url} target="_blank" rel="noopener noreferrer">
                {ref.text}
              </a>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
    // </div>
  );
}
