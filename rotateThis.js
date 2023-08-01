/*
Is one string a rotated version of another?

For example:
String 1: 'hello world'
String 2: 'orldhello w'

Extra hint: (click the drop down to ROT7 to see hint)
If you double the string, you'll be able to find another string inside the doubled string using familiar String methods.

Doubled string: 'hello worldhello world'
Search w/in it: '       orldhello w
*/

function isRotatedVersion(str1, str2) {
    var idx = 0;
    var leastStrLength;
    if(str1.length > str2.length) {
      leastStrLength = str2.length;
    } else if(str2.length > str1.length) {
      leastStrLength = str1.length;
    } else {
      leastStrLength = str1.length;
    }
    while (idx < leastStrLength) {
      if(str1.includes(str2) || str2.includes(str1)) {
        return true
      } else {
        str1 = myRotate(str1);
      }
      idx++;
    }
    return false;
  }

  function myRotate(str) {
    var newStr = str.split("")
    joinedStr = "";
    newStr.unshift(newStr.pop());
    for(let i = 0; i < str.length; i++) {
      joinedStr += newStr[i];
    }
    return joinedStr;
  }

  function assertEqual(actual, expected, testName) {
    return (actual === expected) ? console.log(`passed`) : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`)
  }

  actual = isRotatedVersion("hello world", "orldhello w");
  expected = true;
  testName = "Should rotate either string to find its version in the other";
  assertEqual(actual, expected, testName);

  actual = isRotatedVersion("hello worldhello world", "orldhello w");
  expected = true;
  testName = "Should rotate either string to find its version in the other";
  assertEqual(actual, expected, testName);
