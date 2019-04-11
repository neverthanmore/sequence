// 二分插入排序 O(n^2)
function binaryInsertSort(arr) {
  if (Array.isArray(arr)) {
    for(let i = 1, len = arr.length; i < len; i++) {
      let val = arr[i], left = 0, right = i - 1;

      while(left <= right) {
        const middle = (left + right) >> 0;
        if (val < arr[middle]) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
      for (let j = i - 1; j >= left; j--) {
        arr[j + 1] = arr[j];
      }
      arr[left] = val;
    }
  } else {
    throw new Error(`Params arr must instanceof Array`);
  }

  return arr;
}