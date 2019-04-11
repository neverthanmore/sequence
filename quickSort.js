// 快速排序 O(nlogn)
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = (arr.length / 2) >> 0;
  const pivot = arr.splice(middle, 1)[0];
  const left = [], right = [];
  arr.forEach(val => {
    val < pivot ? left.push(val) : right.push(val);
  });

  return quickSort(left).concat([pivot], quickSort(right));
}