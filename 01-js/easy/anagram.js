/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let map = {};
  str1.split('').forEach((element) => {
    element = element.toLowerCase();
    if (map[element]) {
      map[element]++;
    } else {
      map[element] = 1;
    }
  });
  let map2 = {};
  str2.split('').forEach((element) => {
    element = element.toLowerCase();
    if (map2[element]) {
      map2[element]++;
    } else {
      map2[element] = 1;
    }
  });
  let res = true;
  if (Object.keys(map).length !== Object.keys(map2).length) return false;
  Object.keys(map).forEach((key) => {
    if (map[key] !== map2[key]) {
      res = false;
    }
  });
  return res;
}

module.exports = isAnagram;
