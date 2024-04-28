function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const half = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
  const mergedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      mergedArr.push(arr1.shift());
    } else {
      mergedArr.push(arr2.shift());
    }
  }
  return [...mergedArr, ...arr1, ...arr2];
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
