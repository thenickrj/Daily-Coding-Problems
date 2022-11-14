// 2 Hard

/*
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at 
index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
 If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

function second(arr) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j != i) {
        sum *= arr[j];
      }
    }
    new_arr[i] = sum;
  }
  return new_arr;
}

// let arr = [1, 2, 3, 4, 5];
let arr = [3, 2, 1];
console.log(second(arr));
