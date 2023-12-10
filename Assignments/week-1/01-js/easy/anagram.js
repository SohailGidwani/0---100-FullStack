/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
 // Count the alphabetic characters only
    // Normalize and sort the strings
    const normalize = (str) => str.toLowerCase().split('').sort().join('');

    // Compare the normalized versions of both strings
    return normalize(str1) === normalize(str2);
}

console.log(isAnagram('hello', 'hello!'));
module.exports = isAnagram;
