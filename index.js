// // Assignment 1 
var arr = [{
    name: "Elie",
    isInstructor: true
  }, {
    name: "Tim",
    isInstructor: true
  }, {
    name: "Matt",
    isInstructor: true
  }]

  function extractKeys(array, key) {
    return array.reduce((acc, obj) => {
      return acc.concat(obj[key])
    }, [])
  }

  console.log(extractKeys(arr, 'name'))

// Assignment 2
function filterLetters(arr,letter){
    let count = 0
    arr.filter(x => {
       if(x.toLowerCase() == letter.toLowerCase()){
      count++
      console.log(arr,letter);
    }
  })
  return count
  }
filterLetters(["a","a","b","c","A"], "B");

// Assignment 3
function printFirstAndLast (arr) {

    var newString = '';

    arr.forEach ( function (val) {
      var newVal = val[val.length-1];
      newString = val[0] + newVal;
      console.log(newString);
    });
  }
printFirstAndLast(['awesome','example','of','forEach']);

// Assignment 4
const valTimesIndex = (arrayOfNumbers) => {
    let result = arrayOfNumbers.map((element, index) => {
      return element * index;
    });
    return result;
  }
  console.log(valTimesIndex([1, 2, 3])); // [0,2,6]
  console.log(valTimesIndex([5, 10, 15])); // [0,10,30]

// Assignment 5
var arr = [{
         name: "Joshua",
         isInstructor: true
       }, {
         name: "Mark",
         isInstructor: true
       }, {
         name: "Arthur",
        isInstructor: true
      }]

       function addKeys(array, key) {
         return array.reduce((acc, obj) => {
           return acc.concat(obj[key])
         }, [])
       }

      console.log(addKeys(arr, 'name'))

// Assignment 6
let user = [
    {
      username: 'larry',
      email: 'larry@foo.com',
      yearsExperience: 22.1,
      favoriteLanguages: ['Perl', 'Java', 'C++'],
      favoriteEditor: 'Vim',
      hobbies: ['Fishing', 'Sailing', 'Hiking'],
      hometown: {
        city: 'San Francisco',
        state: 'CA'
      }
    },
    {
      username: 'jane',
      email: 'jane@test.com',
      yearsExperience: 33.9,
      favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
      favoriteEditor: 'Emacs',
      hobbies: ['Swimming', 'Biking', 'Hiking'],
      hometown: {
        city: 'New York',
        state: 'NY'
      }
    },
    {
      username: 'sam',
      email: 'sam@test.com',
      yearsExperience: 8.2,
      favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
      favoriteEditor: 'Atom',
      hobbies: ['Golf', 'Cooking', 'Archery'],
      hometown: {
        city: 'Fargo',
        state: 'SD'
      }
    },
    {
      username: 'anne',
      email: 'anne@test.com',
      yearsExperience: 4,
      favoriteLanguages: ['C#', 'C++', 'F#'],
      favoriteEditor: 'Visual Studio Code',
      hobbies: ['Tennis', 'Biking', 'Archery'],
      hometown: {
        city: 'Albany',
        state: 'NY'
      }
    },
    {
      username: 'david',
      email: 'david@test.com',
      yearsExperience: 12.5,
      favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
      favoriteEditor: 'VS Code',
      hobbies: ['Volunteering', 'Biking', 'Coding'],
      hometown: {
        city: 'Los Angeles',
        state: 'CA'
      }
    }
  ];
      const myArr = ["larry@foo.com", "jane@test.com", "sam@test.com", "anne@test.com","david@test.com"];
      console.log(myArr);
      
// Assignment 7

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
        state: "CA",
      },
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
        state: "NY",
      },
    },
    {
      username: "sam",
      email: "sam@test.com",
      yearsExperience: 8.2,
      favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
      favoriteEditor: "Atom",
      hobbies: ["Golf", "Cooking", "Archery"],
      hometown: {
        city: "Fargo",
        state: "SD",
      },
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
        state: "NY",
      },
    },
    {
      username: "david",
      email: "david@test.com",
      yearsExperience: 12.5,
      favoriteLanguages: ["JavaScript", "C#", "Swift"],
      favoriteEditor: "VS Code",
      hobbies: ["Volunteering", "Biking", "Coding"],
      hometown: {
        city: "Los Angeles",
        state: "CA",
      },
    },
  ];


const printHobbies = (anArrayOfObject) => {
    anArrayOfObject.map((element) => {
      element['hobbies'].map((element) => {
        console.log(element);
      });
    });
  }
  printHobbies(users);
     
// Assignment 8

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
        state: "CA",
      },
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
        state: "NY",
      },
    },
    {
      username: "sam",
      email: "sam@test.com",
      yearsExperience: 8.2,
      favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
      favoriteEditor: "Atom",
      hobbies: ["Golf", "Cooking", "Archery"],
      hometown: {
        city: "Fargo",
        state: "SD",
      },
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
        state: "NY",
      },
    },
    {
      username: "david",
      email: "david@test.com",
      yearsExperience: 12.5,
      favoriteLanguages: ["JavaScript", "C#", "Swift"],
      favoriteEditor: "VS Code",
      hobbies: ["Volunteering", "Biking", "Coding"],
      hometown: {
        city: "Los Angeles",
        state: "CA",
      },
    },
  ];


const findHometownByState = (anArrayOfObject) => {
    return anArrayOfObject.find((element) => {
      return element['hometown']['state'] === 'CA';
    });
  }
  console.log(findHometownByState(users));

// Assignment 9
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
        state: "CA",
      },
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
        state: "NY",
      },
    },
    {
      username: "sam",
      email: "sam@test.com",
      yearsExperience: 8.2,
      favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
      favoriteEditor: "Atom",
      hobbies: ["Golf", "Cooking", "Archery"],
      hometown: {
        city: "Fargo",
        state: "SD",
      },
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
        state: "NY",
      },
    },
    {
      username: "david",
      email: "david@test.com",
      yearsExperience: 12.5,
      favoriteLanguages: ["JavaScript", "C#", "scala", "Swift"],
      favoriteEditor: "VS Code",
      hobbies: ["Volunteering", "Biking", "Coding"],
      hometown: {
        city: "Los Angeles",
        state: "CA",
      },
    },
  ];
  
  
  const allLanguages = (anArrayOfObject) => {
    let newArray = [];
    anArrayOfObject.map((element) => {
      element.favoriteLanguages.map((element) => {
        if (newArray.includes(element) === false) {
          newArray.push(element);
        }
      });
    });
    return newArray;
  }
  console.log(allLanguages(users));

// Assignment 10

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
        state: "CA",
      },
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
        state: "NY",
      },
    },
    {
      username: "sam",
      email: "sam@test.com",
      yearsExperience: 8.2,
      favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
      favoriteEditor: "Atom",
      hobbies: ["Golf", "Cooking", "Archery"],
      hometown: {
        city: "Fargo",
        state: "SD",
      },
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
        state: "NY",
      },
    },
    {
      username: "david",
      email: "david@test.com",
      yearsExperience: 12.5,
      favoriteLanguages: ["JavaScript", "C#", "Swift"],
      favoriteEditor: "VS Code",
      hobbies: ["Volunteering", "Biking", "Coding"],
      hometown: {
        city: "Los Angeles",
        state: "CA",
      },
    },
  ];


const hasFavoriteEditor = (anArrayOfObject, nameOfEditor) => {
    return anArrayOfObject.some((element) => {
      return element['favoriteEditor'] === nameOfEditor;
    });
  }
  console.log(hasFavoriteEditor(users, 'VS Code'));

Assignment 11
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
        state: "CA",
      },
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
        state: "NY",
      },
    },
    {
      username: "sam",
      email: "sam@test.com",
      yearsExperience: 8.2,
      favoriteLanguages: ["JavaScript", "Ruby", "Python", "Go"],
      favoriteEditor: "Atom",
      hobbies: ["Golf", "Cooking", "Archery"],
      hometown: {
        city: "Fargo",
        state: "SD",
      },
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
        state: "NY",
      },
    },
    {
      username: "david",
      email: "david@test.com",
      yearsExperience: 12.5,
      favoriteLanguages: ["JavaScript", "C#", "Swift"],
      favoriteEditor: "VS Code",
      hobbies: ["Volunteering", "Biking", "Coding"],
      hometown: {
        city: "Los Angeles",
        state: "CA",
      },
    },
  ];


const findByUsername = (anArrayOfObject, nameOfUser) => {
    return anArrayOfObject.filter((element) => {
      return element['username'] === nameOfUser;
    });
  }
  console.log(findByUsername(users, 'david'));

// Assignment 12
// Function to check the Vowel
function isVowel(ch) {
    ch = ch.toUpperCase();
    return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U";
  }

  // Returns count of vowels in str
  function countVowels(str)
  {
    var count = 0;
    for (var i = 0; i < str.length; i++)
      if (isVowel(str[i]))
       
        // Check for vowel
        ++count;
    return count;
  }

  // Main Calling Function

  // string object
  var str = "abc de";

  // Total numbers of Vowel
  document.write(countVowels(str));
  document.write("<br>");
   