let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName = [];
for(let people of persons) {
  peopleName.push(people.name);
}
console.log(peopleName);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = [];
for(let people of persons) {
  peopleGrade.push(people.grade);
}
console.log(peopleGrade);

// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = [];
for(let people of persons) {
  peopleSex.push(people.sex);
}
console.log(peopleSex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
let filterName = peopleName.filter((names) => names.startsWith("J") || names.startsWith("P"));
console.log(filterName);
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filterLength = peopleName.filter((names) => names.startsWith("J") || names.startsWith("P") ).length;
console.log(filterLength);

// Log all the filtered male ('M') in persons array
console.log(peopleSex.filter((sex) => sex === "M"));
// Log all the filtered female ('F') in persons array
console.log(peopleSex.filter((sex) => sex === "F"));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
 console.log(peopleSex.filter((sex) => sex === `F`, peopleName.filter((names) => names.startsWith(`C`) || names.startsWith(`J`))));

// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((gd) => gd % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object
let index = peopleName.findIndex((names) => names.startsWith(`J`));
console.log(persons[index]);

// Find the first name that starts with 'P' in persons array and log the object
let index2 = peopleName.findIndex((names) => names.startsWith(`P`));
console.log(persons[index2]);

// Find the first name that starts with 'J', grade is greater than 10 and is a female
let index3 = peopleName.findIndex((names) => names.startsWith(`P`), peopleGrade.findIndex((grades) => grades > 10), peopleSex.findIndex((sex) => sex === `F`));
console.log(persons[index3]);

// Filter all the female from persons array and store in femalePersons array
// Filter all the male from persons array and store in malePersons array

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc,cv) => {
  acc = acc +cv;
  return acc;
},0);

// Find the average grade
let gradeAverage = peopleGrade.reduce((acc,cv) => {
  acc = acc +cv;
  return acc;
},0)/ peopleGrade.length;

// Find the average grade of male
// Find the average grade of female

// Find the highest grade
let highestGrade = [...peopleGrade].sort((a,b) => a - b).pop();
console.log(highestGrade);
// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
[...peopleGrade].sort((a,b) => a-b);
// Sort the peopleGrade in descending order
[...peopleGrade].sort((a,b) => b-a);
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a,b) => b-a);
// Sort the array peopelName in ascending `ABCD..Za....z`
peopleName.sort((a,b) => a-b);

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopleName].sort((a,b) => a-b);