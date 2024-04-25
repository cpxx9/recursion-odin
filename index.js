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

console.log(fibs(8));
