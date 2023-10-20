import React from "react";


interface ISorterProps{
  array: number[];
  type: string;
}




const Sorter = (props: ISorterProps) => {
    return(
      <>
      <div className="h-ide flex flex-row">
        {
          props.array.map((al,index) => {
            const height = `${Math.min(al*5,400)}px`;
            return (
            <>
            <div id={`bar-${props.type}-${index}`} key={`${al}-${props.type}-${index}`} aria-label={`${al}`} style={{height}}  className={`bg-sortBar border-2 border-black w-2 mx-0.5`}/>
            </>)
          })
        }
      </div>
      </>
    )
  }

export default Sorter;