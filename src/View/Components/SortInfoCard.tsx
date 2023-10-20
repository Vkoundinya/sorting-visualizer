import { useState } from "react";
import { ISortType, sortStore } from "../../assets/static/data";
import React from "react";

interface ISortInfoCardProps{
  name: string;
  onSortTypeChange: (sortType: string) => void;
}

interface ISortInfoCardState{
  sortName: string;
  sortInfo: ISortType;
}

const SortInfoCard = (props: ISortInfoCardProps) => {

  const [infoState, setInfoState] = useState<ISortInfoCardState>({
    sortName: props.name,
    sortInfo: sortStore.filter(sort => sort.name === 'BUBBLE_SORT')[0]
  });

  const handleOnChange = (e: any) => {
    const {value = props.name} = e.target;
    setInfoState({sortName: value, sortInfo: sortStore.filter(sort => sort.name === value)[0]})
    props.onSortTypeChange(value);
  }
  return (
    <>
    <div className="w-1/3 break-words border-2 bg-infoCard rounded-lg flex flex-col">
      <div className="w-full m-2">
      <select name="sortSelector" value={infoState.sortName} onChange={(e) => {handleOnChange(e)}} className="w-80 h-12 shadow-2xl rounded-lg border-2 border-buttonBorder" id="sortSelector" placeholder="Select Sort Type">
        {sortStore.map((sortData: ISortType) => {
          return (<option value={sortData.name}>
            {sortData.sortHeader}
          </option>)
        })}
      </select>
      </div>
      <div className="flex flex-row m-4">
          <h2 className="font-extrabold text-infoColor">Name:</h2>
          <span className="ml-2">{infoState.sortInfo.sortHeader}</span>
      </div>
      <div className="flex flex-row m-4">
          <h2 className="font-extrabold text-infoColor">Used at:</h2>
          <span className="ml-2">{infoState.sortInfo.usedAt}</span>
      </div>
      <div className="flex flex-row m-4">
          <h2 className="font-extrabold text-infoColor">Time Complexity:</h2>
          <span className="ml-2">{infoState.sortInfo.timeComplexity}</span>
      </div>
      <div className="flex flex-row m-4">
          <h2 className="font-extrabold text-infoColor">Space Complexity:</h2>
          <span className="ml-2">{infoState.sortInfo.spaceComplexity}</span>
      </div>
      <div className="flex flex-row m-4">
        <h2 className="font-extrabold text-infoColor">Pseudo Code:</h2>
        <ul className="ml-2">
          {infoState.sortInfo.pseudoCode.map((step: string) => {
            return <li>
              {step}
            </li>
          })}
        </ul>
      </div>
    </div>
    </>
  )
}

export default SortInfoCard