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
let filterLength = peopleName.filter((names) => names.startsWith("A") || names.startsWith("C") ).length;
console.log(filterLength);

// Log all the filtered male ('M') in persons array
console.log(persons.filter((person) => person.sex === `M`));
// Log all the filtered female ('F') in persons array
console.log(persons.filter((person) => person.sex === `F`));
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((person) => person.sex === `F`).filter((person) => person.name.startsWith("A") || person.name.startsWith("C")));

// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((gd) => gd % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object
console.log(persons.find((person) => person.name.startsWith(`J`)));
// Find the first name that starts with 'P' in persons array and log the object
console.log(persons.find((person) => person.name.startsWith(`P`)));

// Find the first name that starts with 'J', grade is greater than 10 and is a female
console.log(persons.find((person) => person.name.startsWith(`J`) && person.grade > 10 && person.sex === `F`));

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter((person) => person.sex === `F`);
console.log(femalePersons);
// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter((person) => person.sex === `M`);
console.log(malePersons);
// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc,cv) => {
  acc = acc +cv;
  return acc;
},0);
console.log(gradeTotal);
// Find the average grade
let gradeAverage = gradeTotal/ peopleGrade.length;
console.log(gradeAverage);
// Find the average grade of male
console.log(malePersons.reduce((acc,cv) => {
  acc = acc + cv.grade ;
  return acc;
},0) / malePersons.length);
// Find the average grade of female
console.log(femalePersons.reduce((acc,cv) => {
  acc = acc + cv.grade ;
  return acc;
},0) / femalePersons.length);

// Find the highest grade
let highestGrade = [...peopleGrade].sort((a,b) => a - b).pop();
console.log(highestGrade);

// Find the highest grade in male
let maleGrade = persons.filter((person) => person.sex === `M`).map((person) => person.grade);
console.log(`The highest grade in males is ${maleGrade.sort((a,b) => a-b ).pop()}`);
// Find the highest grade in female
let  femaleGrade = persons.filter((person) => person.sex === `F`).map((person) => person.grade);
console.log(`The highest grade in females is ${femaleGrade.sort((a,b) => a-b ).pop()}`);

// Find the highest grade for people whose name starts with 'J' or 'P'
let nameJorP =  persons.filter((person) => person.name.startsWith(`J`) || person.name.startsWith(`P`));
let gradeJorP = nameJorP.map((person) => person.grade);
let highestJorP = gradeJorP.sort((a,b) => a-b).pop();
console.log(`the highest grade for people whose name starts with 'J' or 'P' ${highestJorP}`);
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


