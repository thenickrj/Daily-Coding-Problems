//  1 -Level Easy

/*
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

function list_num() {
  let list = [10, 15, 3, 7];
  let k = 17;
  let dict = {};
  let map = new Map();
  for (let ele of list) {
    if (Object.values(dict).includes(ele)) {
      return [ele, k - ele];
    } else if (!(ele in dict)) {
      dict[ele] = k - ele;
    } else {
      dict[ele] = k - ele;
    }
  }
}

console.log(list_num());
