import bg2 from "../../assets/Backgrounds/bg2.png";

export default function Result() {
  return (
    // <div className="flex items-center justify-center w-screen h-screen">
    <div
      className="w-[200px] h-[200px] opacity-10 flex flex-col gap-4 p-4 border-t border-base-200 items-center absolute left-1/2 top-[280px] transform -translate-x-1/2"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
    // </div>
  );
}
