/*Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

The return value should be 1-indexed, not 0-indexed.

Examples :
detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd */

function dectectOutlierValue(stringOfNums) {
    evenNums = [];
    oddNums = [];
    stringOfNums.split(" ").forEach(num=> {
      if(Number(num) % 2 === 0) {
        evenNums.push(num);
      } else {
        oddNums.push(num);
      }
    })
    if(evenNums.length > oddNums.length) {
      return stringOfNums.split(" ").indexOf(oddNums[0]) + 1;
    } else {
      return stringOfNums.split(" ").indexOf(evenNums[0]) + 1;
    }
  }

  function assertEqual(actual, expected, testName) {
    return (actual === expected) ? console.log(`passed`) : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }

  actual = dectectOutlierValue("2 4 7 8 10");
  expected = 3;
  testName = "Should return the number that does not share the same property as the others";
  assertEqual(actual, expected, testName);

  actual = dectectOutlierValue("1 10 1 1");
  expected = 2;
  testName = "Should return the number that does not share the same property as the others";
  assertEqual(actual, expected, testName);
