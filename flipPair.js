/*Flip every pair of characters in a string.


Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn! */

function flipPair(sentence) {
    // Let not over complicate this problem
    // In the string, we need to grab pairs of two including spaces and switch them.
    // We will concat this to a new string
    // based on the expected we do not switch anything that is not in the alphabet

    flippedSentence = "";
    sent = sentence.split("");
    for(let i = 0; i < sent.length; i+= 2) {
      if(sent[i + 1] === undefined) {
        flippedSentence += sent[i];
      } else {
        flippedSentence += sent[i + 1] + sent[i];
      }
    }
    return flippedSentence;
  }

  function assertEqual(actual, expected, testName) {
    return (actual === expected) ? console.log(`passed`) : console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }

  actual = flipPair("check out how interesting this problem is, it\'s insanely interesting!");
  expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";
  testName = "Should grab pairs of two and switch them";
  assertEqual(actual, expected, testName);
