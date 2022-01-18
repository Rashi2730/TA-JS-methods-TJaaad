let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(array){
  let longeestWord = array.sort((a,b) => a.length - b.length).pop();
  return longeestWord;
}
// - Convert the above array "words" into an array of length of word instead of word.
let wordsLength = words.map((word) => word.length);
console.log(wordsLength);
// - Create a new array that only contains word with atleast one vowel.
function ifVow(word){
  return  word.toLowerCase().includes("a") ||  word.toLowerCase().includes("e") ||  word.toLowerCase().includes("i") ||  word.toLowerCase().includes("o") ||  word.toLowerCase().includes("u") ;
}
let vowelArray = words.filter((word) => ifVow(word));
console.log(vowelArray);

// - Find the index of the word "rhythm"
console.log(words.indexOf("rhythm"));
// - Create a new array that contians words not starting with vowel.
let noVowelSt = words.filter((word) => !ifVow(word[0]));
console.log(noVowelSt);
// - Create a new array that contianse words not ending with vowel
let noVowelEnd = words.filter((word) => !ifVow(word[word.length - 1]));
console.log(noVowelEnd);

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(array) {
  return array.reduce((acc, cv) => {
    acc = acc +cv;
    return acc;
  }, 0);
}

console.log(sumArray(numbers));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let threeArray = numbers.filter((num) => num % 3 === 0);
console.log(threeArray);
// - Create a new array that contains only even numbers
let evenArray = numbers.filter((num) => num% 2 === 0);
console.log(evenArray);

// - Create  a new array that contains only odd numbers.
let oddArray = numbers.filter((num) => num% 2 !== 0);
console.log(oddArray);

// - Create a new array that should have true for even number and false for odd numbers.
let eveOddArray = numbers.map((num) => { 
  if( num% 2 === 0){
  return true; 
  }else {
    return false;
  }
});
console.log(eveOddArray);

// - Sort the above number in assending order.
let sortedArray = numbers.sort((a,b) => a - b);
console.log(sortedArray);

// - Does sort mutate the original array?
// yes //
// - Find the sum of the numbers in the array.
let sumOfArray = numbers.reduce((acc, cv) => {
  acc = acc + cv;
  return acc;
}, 0);
console.log(sumOfArray);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(array) {
  return array.reduce((acc, cv) => {
    acc = acc +cv;
    return acc ;
  }, 0) / (array.length);
}
console.log(averageNumbers(numbers));


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(array) {
  return array.map((word) => word.length).reduce((acc, cv) => {
    return acc + cv;
  },0) / (array.length);
}
console.log(averageWordLength(strings));

