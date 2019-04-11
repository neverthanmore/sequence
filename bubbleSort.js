// 冒泡排序 O(n^2）
function bubbleSort(arr) {
  if (Array.isArray(arr)) {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
      for (let j = len - 1; j >= i; j--) {
        if (arr[j] < arr[j - 1]) {
          arr[j] ^= arr[j - 1];
          arr[j - 1] ^= arr[j];
          arr[j] ^= arr[j - 1];
        }
      }
    }
    return arr;
  } else {
    throw new Error(`Params arr must instanceof Array`);
  }
}