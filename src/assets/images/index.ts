import bubbleSort from './bubbleSort.png';
import selectionSort from './selectionSort.png';
import insertionSort from './insertionSort.png';
import mergeSort from './mergeSort.png';
import mergeSort2 from './mergeSort2.png';
import quickSort from './quickSort.png';
import quickSort2 from './quickSort2.png';
import dev from './dp.png'

interface IImageType {
  [x: string]: any;
}
const images: IImageType = {
  bubbleSort: bubbleSort,
  selectionSort: selectionSort,
  insertionSort: insertionSort,
  mergeSort: mergeSort,
  mergeSort2: mergeSort2,
  quickSort: quickSort,
  quickSort2: quickSort2,
  dev: dev
}

export default images;