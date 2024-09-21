#!/usr/bin/env node

const fibsIterative = (n) => {
  const fibsArr = new Array();
  fibsArr[0] = 0;
  if (n <= 0) {
    return fibsArr;
  }
  for (let i = 1; i < n; i++) {
    if (fibsArr[i - 1] == 0) {
      fibsArr.push(fibsArr[i - 1] + 1);
    } else {
      fibsArr.push(fibsArr[i - 1] + fibsArr[i - 2]);
    }
  }

  return fibsArr;
};

//console.log(fibsIterative(0));

const fibsRecursive = (n) => {
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return [0, 1];
  }
  const arr = fibsRecursive(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
};

console.log(fibsRecursive(8));
