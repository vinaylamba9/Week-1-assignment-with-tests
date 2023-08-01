/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function isAlphabetic(ch) {
  let codePoint = ch.charCodeAt(0);
  return (
    (codePoint >= 65 && codePoint <= 90) ||
    (codePoint >= 97 && codePoint <= 122)
  );
}

function isPalindrome(str) {
  // easy to do.
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (!isAlphabetic(str.charAt(i))) {
      i++;
      continue;
    }
    if (!isAlphabetic(str.charAt(j))) {
      j--;
      continue;
    }
    if (str.charAt(i) === str.charAt(j)) {
      i++;
      j--;
      continue;
    }
    return false;
  }
  return true;
}

module.exports = isPalindrome;
