type DotProps = {
    color?: string;
    size?: string;
    animate?: boolean;
  };
  
  const Dot = ({ color = "bg-red-500", size = "w-4 h-4", animate = false }: DotProps) => {
    return (
      <div className={`rounded-full ${color} ${size} ${animate ? "animate-pulseColor" : ""}`} />
    );
  };
  
  export default Dot;
  