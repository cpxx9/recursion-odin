#!/usr/bin/env node
function fibs(countTo) {
  const fibArr = [];
  for (let i = 0; i < countTo; i += 1) {
    if (i === 0) {
      fibArr.push(i);
    } else if (i === 1 || i === 2) {
      fibArr.push(1);
    } else {
      fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
    }
  }
  return fibArr;
}

function fibsRec(countTo) {
  if (countTo === 1) {
    return [0];
  }
  if (countTo === 2) {
    return [0, 1];
  }
  let fibArr = [];
  fibArr = fibsRec(countTo - 1);
  fibArr.push(fibArr[countTo - 3] + fibArr[countTo - 2]);
  return fibArr;
}

console.log(fibs(8));

console.log(fibsRec(8));
