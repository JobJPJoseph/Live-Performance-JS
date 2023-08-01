/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return:
H W
e o
l r
l l
o d
*/

function transpose(array) {
    var arr = [];
    // To solve this you would go by col, row instead of row, col
    var largerLength;
    if(array[0].length > array[1].length) {
      largerLength = array[0].length;
    } else {
      largerLength = array[1].length;
    }
    for(var row = 0; row < largerLength; row++) {
      subArr = [];
      for(var col = 0; col < array.length; col++) {
        // subArr.push(array[col][row]);
        if(array[col][row] !== undefined) {
          subArr.push(array[col][row]);
        } else {
          subArr.push(" ");
        }
      }
      arr.push(subArr.join(" "))
    }
    return arr.join("\n");
  }

  function assertArrayEqual(actual, expected, testName) {
    if(actual.length !== expected.length) return console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
    for(let i = 0; i < expected.length; i++) {
      if(expected[i] !== actual[i]) return console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
    }
    return console.log(`passed`);
  }
  console.log(transpose(['Hello','World']))
  console.log()
  console.log(transpose(['some','things']))
  console.log()
  console.log(transpose(['things','some']))

  actual = transpose(['Hello','World']);
  expected = "H W\ne o\nl r\nl l\no d";
  testName = "Should collect all the elements from top to bottom";
  assertArrayEqual(actual, expected, testName);
