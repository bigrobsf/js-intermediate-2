/* jshint esversion: 6 */
/* jshint devel: true */
/* jshint node: true */
'use strict';

let users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
}
];

// =============================================================================
function printEmails(arr) {
  arr.forEach(function(ele) {
    console.log(ele.email);
  });
}

printEmails(users);

// =============================================================================
function printHobbies(arr) {
  arr.forEach(function(ele) {
    ele.hobbies.forEach(function(val) {
      console.log(val);
    });
  });
}

printHobbies(users);

// =============================================================================
function findHometownByState(arr, state) {
  return arr.find(function(ele) {
    return ele.hometown.state === state;
  });
}

findHometownByState(users, 'CA');

// =============================================================================
function allLanguages(arr) {
  let langs = [];
  arr.forEach(function(ele) {
    ele.favoriteLanguages.forEach(function(val) {
        if (langs.indexOf(val) === -1) langs.push(val);
    });
  });

  return langs;
}

allLanguages(users);

// =============================================================================
function hasFavoriteEditor(arr, editor) {
  return arr.reduce(function(acc, next) {
    acc.push(next.favoriteEditor);
    return acc;
  }, []).some(function(val) {
    return val === editor;
  });
}

hasFavoriteEditor(users, "Sublime Text"); // true
hasFavoriteEditor(users, "Eclipse"); // false

// =============================================================================
function findByUserName(arr, name) {
  return arr.find(function(val) {
    return val.username === name;
  });
}

findByUserName(users, 'david');










// end
