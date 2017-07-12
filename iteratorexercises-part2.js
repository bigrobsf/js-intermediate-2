/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
'use strict';

// =============================================================================
// vowelCount with for loop
function vowelCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
        if (str[i] in result) result[str[i]]++;
        else result[str[i]] = 1;
    }
  }

  return result;
}

// =============================================================================
// vowelCount with forEach
function vowelCount(str) {
  let array = str.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = {};

  array.forEach(function(ele) {
    if (vowels.indexOf(ele.toLowerCase()) !== -1) {
      if (ele in result) result[ele]++;
      else result[ele] = 1;
    }
  });

  return result;
}

// =============================================================================
// vowelCount with reduce
function vowelCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').reduce(function(acc, next) {
    if (vowels.indexOf(next.toLowerCase()) !== -1) {
      if (next in acc) acc[next]++;
      else acc[next] = 1;
    }

    return acc;
  }, {});
}

vowelCount("incredible");
// {i:2, e: 2}
vowelCount("awesome");
// {a:1, e:2, o:1}

// =============================================================================
// removeVowels with filter
function removeVowels(str) {
  let array = str.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  return array.filter(function(ele) {
    return vowels.indexOf(ele) === -1;
  });
}

removeVowels("amazing"); // ["m","z","n","g"]
removeVowels("fun"); // ["f","n"]
removeVowels("silly"); // ["s","l","l","y"]
