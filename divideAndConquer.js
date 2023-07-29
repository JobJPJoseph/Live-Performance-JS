/*
Binary search is a technique for very rapidly searching a sorted collection by cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number, just round it down ("floor" it).
*/

function divideAndConquer(array, target, start = 0, end = array.length) {

    if(start > end) return null;

    var index = calculateMidpoint(start, end);
    var midpoint = array[index];

    if(target > midpoint) {
      return divideAndConquer(array, target, index + 1, end)
    }

    if(target < midpoint) {
      return divideAndConquer(array, target, start, index - 1);
    }

    return start;
  }

  function calculateMidpoint(start, end) {
    var num = end - start;
    return end - num;
  }

  function assertEqual(actual, expected, testName) {
    return (actual === expected) ? console.log(`passed`) : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`)
  }

  var actual = divideAndConquer([1, 3, 16, 22, 31, 33, 34], 31)
  expected = 4;
  testName = "Should find the midpoint in the array";
  assertEqual(actual, expected, testName);

  var actual = divideAndConquer([1, 3, 16, 22, 31, 33, 34], 0)
  expected = null;
  testName = "Should return null when the target is nit found."
  assertEqual(actual, expected, testName);

  var actual = divideAndConquer([1, 3, 22, 31, 33, 34], 31)
  expected = 3;
  testName = "Should find the midpoint in the array";
  assertEqual(actual, expected, testName);
