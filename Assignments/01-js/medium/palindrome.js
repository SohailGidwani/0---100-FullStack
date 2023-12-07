/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  var cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();

  // If the string has a single character or is empty, it's a palindrome
  if (cleanedStr.length <= 1) {
      return true;
  }

  // Compare the cleaned string with its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

module.exports = isPalindrome;
