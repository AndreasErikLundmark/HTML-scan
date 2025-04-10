interface Props{
    counter: number
}

export default function Stats({counter}:Props){

    return (
        <div className="stats stats-vertical lg:stats-horizontal text-xs mr-2 bg-warning">
        <div className="stat h-auto w-auto p-2"> {/* Allowing the height/width to auto adjust */}
          <div className="stat-title text-xs">Hits</div> {/* Keep the title small */}
          <div className="stat-value text-xs">{counter}</div> {/* Make sure value is small */}
        </div>

</div>
    );

}