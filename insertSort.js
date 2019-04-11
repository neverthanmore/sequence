// 插入排序 O(n^2)
function insertSort(arr) {
  if (Array.isArray(arr)) {
    for(let i = 1, len = arr.length; i < len; i++) {
      let val = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > val) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = val;
    }
  } else {
    throw new Error(`Params arr must instanceof Array`);
  }

  return arr;
}