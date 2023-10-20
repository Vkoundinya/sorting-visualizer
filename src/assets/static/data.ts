
export interface ISortType{
  name: string;
  sortHeader: string;
  timeComplexity?: string;
  spaceComplexity?: string;
  usedAt?: string;
  code: string;
  stability: string;
  pseudoCode: string[];
}

export const sortStore: ISortType[] = [
  {
    sortHeader: 'Insertion Sort',
    name: 'INSERTION_SORT',
    code:'insertionSort',
    timeComplexity: 'Quadratic (O(n^2))',
    usedAt:'Useful for small datasets or mostly sorted data.',
    spaceComplexity:'Constant (O(1))',
    stability: 'Yes',
    pseudoCode: [
      "Start with the second element of the array.",
      "Compare it with the elements before it and insert it in the correct position within the sorted portion.",
      "Move to the next unsorted element and repeat step 2.",
      "Continue this process until the entire array is sorted."
    ]
  },
  {
    sortHeader: 'Selection Sort',
    name: 'SELECTION_SORT',
    code: 'selectionSort',
    timeComplexity: '',
    usedAt:'It is Not commonly used for large datasets due to its inefficiency.',
    spaceComplexity:'Constant (O(1))',
    stability: 'No',
    pseudoCode:[
      "Divide the array into two parts: the sorted part and the unsorted part.",
      "Find the smallest element in the unsorted part.",
      "Swap it with the first element of the unsorted part.",
      "Move the boundary between the sorted and unsorted parts by one element.",
      "Repeat steps 2-4 until the entire array is sorted."
    ]
  },
  {
    sortHeader: 'Bubble Sort',
    name: 'BUBBLE_SORT',
    code: 'bubbleSort',
    timeComplexity: 'Quadratic (O(n^2))',
    usedAt: 'It is not commonly used for large datasets due to its inefficiency.',
    spaceComplexity:'Constant (O(1))',
    stability:'Yes',
    pseudoCode:[
      "Start at the first element of the array.",
      "Compare it with the next element.",
      "If the next element is smaller, swap them.",
      "Move to the next element and repeat steps 2-3.",
      "Continue this process until the end of the array is reached.",
      "Repeat steps 1-5 for the entire array until it's sorted."
    ]
  },
  {
    sortHeader: 'Merge Sort',
    name: 'MERGE_SORT',
    code: 'mergeSort',
    usedAt: 'Widely used and efficient for large datasets.',
    timeComplexity: 'Linearithmic (O(n log n))',
    spaceComplexity: 'Linear (O(n))',
    stability: 'Yes',
    pseudoCode: [
      "Divide the array into halves until each sub-array contains only one element.",
      "Merge two adjacent sub-arrays in sorted order.",
      "Continue merging sub-arrays until there is only one sorted array remaining."
    ]
  },
  {
    sortHeader: 'Quick Sort',
    name: 'QUICK_SORT',
    code: 'quickSort',
    usedAt: 'Widely used and efficient for large datasets, but can be slow on mostly sorted data.',
    timeComplexity: 'Quadratic (O(n^2)), but typically Linearithmic (O(n log n))',
    spaceComplexity: 'Logarithmic (O(log n))',
    stability: 'No',
    pseudoCode:[
      "Choose a pivot element from the array.",
      "Partition the array into two groups: elements less than the pivot and elements greater than the pivot.",
      "Recursively apply steps 1-2 to the sub-arrays.",
      "Concatenate the sub-arrays along with the pivot to get the sorted array."
    ]
  }
];