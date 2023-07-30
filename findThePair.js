/*
Given a list of non-negative integers and a target sum, find a pair of numbers that sums to the target sum.

Example:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

*/

function findPairForSum(nums, target) {
    // In a sense we are doing something similar to getting uniq pairs but trying to see what pair of element === num
    // also the same elements
    arr = [];
    for(var i = 0; i < nums.length; i++) {
      for(var j = 0; j < nums.length; j++) {
        if(!( arr.includes(nums[i]) && arr.includes(nums[j] ))) {
          if(nums[i] + nums[j] === target && !(nums[i] === nums[j])) arr.push(nums[i], nums[j])
        }
      }
    }
    return arr;
  }

  function assertArrayEqual(actual, expected, testName) {
    if(actual.length !== expected.length) return console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
    for(let i = 0; i < expected.length; i++) {
      if(expected[i] !== actual[i]) return console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
    }
    return console.log(`passed`);
  }

  actual = findPairForSum([3, 34, 4, 12, 5, 2], 9);
  expected = [4, 5];
  testName = "Should find a pair of numbers that sums to the target sum.";
  assertArrayEqual(actual, expected, testName);

  actual = findPairForSum([3, 6, 4, 9, 5, 2], 9);
  expected = [3, 6, 4, 5];
  testName = "Should find a pair of numbers that sums to the target sum.";
  assertArrayEqual(actual, expected, testName);
