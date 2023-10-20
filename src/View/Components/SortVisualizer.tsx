import {useState} from 'react'
import Button from './Button';
import Sorter from './Sorter';
import CodeSnippet from './CodeSnippet';
import React from 'react';



export interface ISortVisualizerProps{
  sortName: string;
  codeSnippet: string;
}

export interface ISortVisualizerState{
  sortCount: number;
  sortArray: number[];
  codeSnippetVisible: boolean;
}




const SortVisualizer =(props: ISortVisualizerProps) => {

const getNumberArray = (length?: number) =>{
  const a: number[] = [];
  const arrayLength = length ?? 25;
  for(let i=0; i<arrayLength;i = i+1){
    a.push(Math.floor(Math.random() * (100)));
  }
  return a;
}

  const [state, setState] = useState<ISortVisualizerState>({
    sortCount: 25,
    sortArray: getNumberArray(),
    codeSnippetVisible: false
  });

  const handleButtonClick = async (e: any, buttonClicked: string) => {
    e.preventDefault();
    if (buttonClicked === 'SORT'){
      executeSortingProcessBySortID(props.sortName);
    }
    else if (buttonClicked === 'RESET'){
      const sortCount = state.sortCount ?? 25;
      setState(prevState => ({...prevState, sortArray: getNumberArray(sortCount)}));
    };
  }

  const executeSortingProcessBySortID = async (sortID: string) => {
    switch(sortID){
      case 'SELECTION_SORT':
        {
          await selectionSort(state.sortArray);
          break;
        }
      case 'BUBBLE_SORT':
        {
          await bubbleSort(state.sortArray);
          break;
        }
      case 'INSERTION_SORT':
        {
          insertionSort(state.sortArray);
          break;
        }
      case 'MERGE_SORT':
        {
          mergeSort(state.sortArray);
          break;
        }
      case 'QUICK_SORT':
        {
          quickSort(state.sortArray);
          break;
        }
      default:
        {
          console.log(`Can't Find a sorting algorithm with name ${sortID}`);
        }
    }
  }

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function bubbleSort(data: number[]) {
    for (let i = 0; i < data.length; i++) {
      let swapped = false;
      for (let j = 0; j < data.length - 1 - i; j++) {
        // Visualize swapping
        const bar1 = document.getElementById(`bar-${props.sortName}-${j}`);
        const bar2 = document.getElementById(`bar-${props.sortName}-${j+1}`);
        if (bar1 && bar2){
          bar1.style.backgroundColor = '#FFC107';
          bar2.style.backgroundColor = '#FFC107';
          await sleep(50);
          if (data[j] > data[j + 1]) {
            [data[j+1], data[j]] = [data[j], data[j+1]];
            swapped = true;
            setState(prevState => ({...prevState, sortArray: data}));
          }
          // Reset color
          bar1.style.backgroundColor = '#4169E1';
          bar2.style.backgroundColor = '#4169E1';
        }
      }
      if(!swapped){
        break;
      }
    }
  }

  async function selectionSort(data: number[]){
    for(let i=0; i<data.length-1;i++){
      let min_index = i;
      for(let j=i+1;j<data.length;j++){
        const bar1 = document.getElementById(`bar-${props.sortName}-${j}`);
        const bar2 = document.getElementById(`bar-${props.sortName}-${min_index}`);
        if (bar1 && bar2){
          bar1.style.backgroundColor = '#FFC107';
          bar2.style.backgroundColor = '#FFC107';
          await sleep(50);
          if(data[min_index] > data[j]){
            min_index = j;
          }
          bar1.style.backgroundColor = '#4169E1';
          bar2.style.backgroundColor = '#4169E1';
        }
      }
      if (i!==min_index){
        [data[i],data[min_index]] = [data[min_index], data[i]];
        setState(prevState => ({...prevState, sortArray: data}));
      }
    }
  }

  async function insertionSort(data: number[]){
    for(let i=0;i<data.length;i++){
      let key = data[i];
      let j = i-1;
      while(j>=0 && data[j] > key){
        const bar1 = document.getElementById(`bar-${props.sortName}-${j+1}`);
        const bar2 = document.getElementById(`bar-${props.sortName}-${j}`);
        if(bar1 && bar2){
          bar1.style.backgroundColor = '#FFC107';
          bar2.style.backgroundColor = '#FFC107';
          await sleep(50);
          data[j+1] = data[j];
          j--;
          bar1.style.backgroundColor = '#4169E1';
          bar2.style.backgroundColor = '#4169E1';
          setState(prevState => ({...prevState, sortArray: data}));
        }
      }
      data[j+1] = key;
      setState(prevState => ({...prevState, sortArray: data}));
    }
  }

  async function mergeSort(data: number[], left=0,right=data.length-1){
    if (left >= right) return;
    const mid = Math.floor((left + right) / 2);
    await mergeSort(data, left, mid);
    await mergeSort(data, mid + 1, right);
    await mergeImplementation(data, left, mid, right);
  }

  async function mergeImplementation(data: number[], left: number, mid: number,right: number){
    const leftArr = data.slice(left, mid + 1);
  const rightArr = data.slice(mid + 1, right + 1);
  let i = 0, j = 0, k = left;
  const bar1 = document.getElementById(`bar-${props.sortName}-${left}`);
  const bar2 = document.getElementById(`bar-${props.sortName}-${right}`);
  if (bar1 && bar2){
    bar1.style.backgroundColor = '#FFC107';
    bar2.style.backgroundColor = '#FFC107';
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
        data[k++] = leftArr[i++];
      } else {
        data[k++] = rightArr[j++];
      }
      setState(prevState => ({...prevState, sortArray: data}));
      await sleep(50);
    }
    while (i < leftArr.length) {
      data[k++] = leftArr[i++];
      setState(prevState => ({...prevState, sortArray: data}));
      await sleep(50);
    }
    while (j < rightArr.length) {
      data[k++] = rightArr[j++];
      setState(prevState => ({...prevState, sortArray: data}));
      await sleep(50);
    }
    bar1.style.backgroundColor = '#4169E1';
    bar2.style.backgroundColor = '#4169E1';
  }
}

  async function quickSort(data: number[], low=0,high=data.length-1){
    if (low < high) {
      await partitionData(data, low, high).then(async (pivotIndex) => {
        await quickSort(data, low, pivotIndex - 1);
        await quickSort(data, pivotIndex + 1, high);
      });
    }
  }

  async function partitionData(data: number[], low: number, high: number): Promise<number>{
  let i = low - 1;
  const pivot = data[high];
  for (let j = low; j < high; j++) {
    const bar1 = document.getElementById(`bar-${props.sortName}-${low}`);
    const bar2 = document.getElementById(`bar-${props.sortName}-${j}`);
    if (bar1 && bar2){
      bar1.style.backgroundColor = '#FFC107';
      bar2.style.backgroundColor = '#FFC107';
      await sleep(50);
      if (data[j] < pivot) {
        i++;
        [data[i], data[j]] = [data[j], data[i]];
        setState(prevState => ({...prevState, sortArray: data}));
      }
      bar1.style.backgroundColor = '#4169E1';
      bar2.style.backgroundColor = '#4169E1';
    }
    }
    [data[i + 1], data[high]] = [data[high], data[i + 1]];
    setState(prevState => ({...prevState, sortArray: data}));
   return i+1
  }
  const handleArrayLengthChange = (e: any) => {
    e.preventDefault();
    const {value} = e.target;
    setState(prevState => ({...prevState, sortCount: Math.min(value,100) , sortArray: getNumberArray(Math.min(value,70))}));
}

  const onCodeSnippetClick = (e: Event, isSnippetVisible: boolean) => {
    e.preventDefault();
    setState(prevState => ({...prevState,codeSnippetVisible: isSnippetVisible }));
  }
  return (
    <>
    <div className='grid grid-column-3  w-3/5 bg-sorter  h-border-2 border-white rounded-lg'>
      <div className='flex flex-row m-4 justify-evenly'>
          <div className='flex flex-col justify-start align-baseline'>
            <label htmlFor="count">Array Length</label>
            <input name='count' id='rangeSlide' className="my-2 border-2 border-buttonBorder rounded-md w-24 h-10" type={'range'} min={20} max={70} onChange={(e) => handleArrayLengthChange(e)}/>
          </div>
          <div>
            <Button  buttonLabel='Sort' emphasis='PRIMARY' size='sm' onClick={(e: any) => handleButtonClick(e, "SORT")}/>
          </div>
          <div>
            <Button  buttonLabel='Reset' emphasis='PRIMARY' size='sm' onClick={(e: any) => handleButtonClick(e, 'RESET')}/>
          </div>
      </div>
      <div className='w-11/12 justify-self-center'>
        <Sorter array={state.sortArray} type={props.sortName} />
      </div>
      <div className='justify-self-end grid-rows-layout'>
          <Button size = {'md'} emphasis={'PRIMARY'} onClick={(e: Event) => onCodeSnippetClick(e,true)} buttonLabel={"Code Snippet</>"}  />
      </div>
      <CodeSnippet visible = {state.codeSnippetVisible} code={props.codeSnippet} onClose={(e: Event) => onCodeSnippetClick(e,false)}/>

    </div>
    </>
  )
}

export default SortVisualizer