/*Flip every chunk of n characters in a string, where n is any positive integer greater than 1.

Note that this is intentionally very similar to the previous problem.

Please focus on getting a working solution with the tools you know well.

Practice the interactive/collaborative interview style that's described in the documentation.

Example:
var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

Breaking this example down piece by piece:
'a sho' -> 'ohs a'
'rt ex' -> 'xe tr'
'ample' -> 'elpma'

-> 'ohs axe trelpma'
*/

function bigFlip(sentence, num) {
    // We have to look at this sort of like a range, that is what num represents
    // we will make a new string called bigFlipSentence
    // We are going split the sentence and do a for loop
      // The for loop will increment num times
      // We will slice a piece from sentence and reverse it
      // if undefined, we

    bigFlipSentence = "";
    sent = sentence.split("");
    var i = 0;
    while (bigFlipSentence.length < sentence.length) {
      sentPiece = sent.slice(i - num, i);
      bigFlipSentence += reverse(sentPiece);
      i+=num;
    }
    return bigFlipSentence;
  }

  function reverse(word) {
    let idx = word.length - 1;
    let str = "";
    while (idx >= 0) {
      if(word[idx] !== undefined) {
        str += word[idx];
        idx--;
      } else {
        idx--;
      }
    }
    return str;
  }

  function assertEqual(actual, expected, testName) {
    return (actual === expected) ? console.log(`passed`) : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }

  actual = bigFlip("a short example" , 5)
  expected = "ohs axe trelpma";
  testName = "Flip every chunk of n characters in a string";
  assertEqual(actual, expected, testName);
