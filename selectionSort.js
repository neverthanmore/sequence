// 选择排序  O(n^2）
function selectionSort(arr) {
  if (Array.isArray(arr)) {
    for(let i = 0, len = arr.length; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[i]) {
          arr[i] ^= arr[j];
          arr[j] ^= arr[i];
          arr[i] ^= arr[j]
        }
      }
    }
    return arr
  } else {
    throw new Error(`Params arr must instanceof Array`);
  }
}