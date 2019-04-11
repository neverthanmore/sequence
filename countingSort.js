// 计算排序

function countingSort(arr) {
  const C = [], D = [];
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  console.log(min, max);
  const len = arr.length;

  for(let i = 0; i < len; i++) {
    const j = arr[i];
    C[j] = C[j] ? ++C[j] : 1; 
  }

  for(let k = min; k <= max; k++) {
    if (C[k]) {
      while(C[k] > 0) {
        D.push(k);
        C[k]--;
      }
    }
  }
  return D;
}