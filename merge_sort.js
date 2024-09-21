#!/usr/bin/env node

function merge(lArr, rArr) {
  let arr = new Array();
  while (lArr.length && rArr.length) {
    // pick smaller element out of the smallest from L & R arrays
    if (lArr[0] < rArr[0]) {
      arr.push(lArr.shift());
    } else {
      arr.push(rArr.shift());
    }
  }
  // concatenate leftover elements
  return [...arr, ...lArr, ...rArr];
}

function mergeSortRecursive(arr) {
  const half = arr.length / 2;

  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, half);

  return merge(mergeSortRecursive(left), mergeSortRecursive(arr));
}

console.log(mergeSortRecursive([234, 21, 12, 98, 3, 2]));
