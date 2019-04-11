// 堆排序 O(nlogn)
const swap = (arr, i, j) => {
  arr[i] ^= arr[j];
  arr[j] ^= arr[i];
  arr[i] ^= arr[j];
}

function heapSort(arr) {
  // 建最大堆 -> 完全二叉树
  const len = arr.length;
  for(let i = (len-1)/2 >> 0; i >= 0; i--) {
    heapify(arr, i, len);
  }

  for (let i = len -1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, i);
  }

  return arr;
}

function heapify(arr, parent, end) {
  let child = 2 * parent + 1;

  if (child >= end) return;

  if (child + 1 < end && arr[child] < arr[child + 1]) {
    child++;
  }

  if (arr[child] > arr[parent]) {
    swap(arr, parent, child);
    heapify(arr, child, end);
  }
}