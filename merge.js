function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let sortedArr = [];
  const half = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half);
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
