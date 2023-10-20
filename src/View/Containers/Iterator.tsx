import SortVisualizer from '../Components/SortVisualizer'
import SortInfoCard from '../Components/SortInfoCard'
import { useState } from 'react';
import { sortStore } from '../../assets/static/data';
import React from 'react';

interface IIteratorState{

  sortName: string;
  codeSnippet: string;

}


const Iterator = () => {

  const [iteratorState, setIteratorState] = useState<IIteratorState>({
    sortName: 'BUBBLE_SORT',
    codeSnippet:"bubbleSort"
  });

  const handleSortChange = (sortName: string) => {
    setIteratorState(prevState => ({...prevState, sortName: sortName, codeSnippet: getCodeSnippetFromName(sortName)}));
  }

  const getCodeSnippetFromName = (name: string): string => {
    const sortObj = sortStore.find(obj => obj.name === name);
    return sortObj?.code || "bubbleSort";
  };
  return (
    <>
      <div className='w-full mx-3 py-8 h-screen'>
        <div className='w-full flex flex-row justify-around'>
          <SortInfoCard name={iteratorState.sortName} onSortTypeChange={(sortName: string) => handleSortChange(sortName)}  />
          <SortVisualizer sortName={iteratorState.sortName} codeSnippet={iteratorState.codeSnippet}/>
        </div>
      </div>
    </>
  )
}

export default Iterator