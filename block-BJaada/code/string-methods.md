Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
- Parameter - none 
- Return - returns the string converted to uppercase.
- Example - 
```js 
let str = "Rashi Israni"
str.toUppercase(); // "RASHI ISRANI" 
```
- Description -  `toUppercase` just converts the string to uppercase .

3. `toLowerCase`
- Parameter - none 
- Return - returns the string converted to lowercase.
- Example - 
```js 
let str = "Rashi Israni"
str.toLowercase(); // "rashi israni" 
```
- Description -  `toLowercase` just converts the string to lowercase .

4. `trim`
- Parameter - none 
- Return - returns a new string with all whitespaces removed .
- Example - 
```js
let string = "    Rashi Israni";
string.trim(); // 'Rashi Israni' 
```
- Description - `trim` removes the whitespaces in the string

5. `trimEnd`
- Parameter - none 
- Return - returns a new string with all whitespaces removed from end of the string .
- Example - 
```js
let string = "    Rashi Israni   ";
string.trimEnd(); // '    Rashi Israni' 
```
- Description - `trimEnd` removes all  the whitespaces in the string from the end.

6. `trimStart`
- Parameter - none 
- Return - returns a new string with all whitespaces removed from start of the string .
- Example - 
```js
let string = "    Rashi Israni   ";
string.trimStart(); // 'Rashi Israni   ' 
```
- Description - `trimStart` removes all  the whitespaces in the string from the start.

7. `concat`
- Parameter - (strn) one or more than one string to concatenate.
- Return - returns the combined string from the given string/s.
- Example - 
```js
let first = "RASHI"
let last = "ISRANI"
first.concat(` ` , last); // "RASHI SIRANI"
```
- Description - `concat` just combines two or more strings 

8. `endsWith`
- Parameter - 
    * a character or string 
    * length (length of string) // `OPTIONAL`
- Return - true if the given parameter are found at the end of string; false, if not.
- Example - 
```js
let str = "I am having a better life.";
str.endsWith("."); // true
str.endsWith("life"); // false
str.endsWith("e", 25); // true
```
- Description - `endsWith` checks if the given string ends on the specific character/string.

9. `includes`
- Parameter -
    * a character / string to be searched
    * position , at which the char/ string should be searched. // `OPTIONAL` 
- Return - true if given parameter is found in the string , false if not .
- Example - 
```js
 let str = "I am having a better life.";
str.includes("l"); // true
str.includes("am"); // true
str.includes("xyz") // false
str.includes("having", 5) // true
```
- Description - `includes` just checks if the given parameter is found anywhere in the given string.

10. `indexOf`
- Parameter - 
    * string value 
    * an integer value (fromIndex) from which to start the search .
- Return - returns the index position of the character/ string in the given string. It returns -1 when not found .
- Example -  
```js
let str = "I am having a better life.";
str.indexOf(`life`); // 21
str.indexOf("a", 3) // 6 
```
- Description - `indexOf` just simply returns the index position of the given parameter in the given string.

11. `lastIndexOf`
- Parameter - 
    * string value 
    * an integer value (fromIndex) from which to start the search .
- Return - returns the last index position of the character/ string in the given string. It returns -1 when not found .
- Example -  
```js
let str = "I am having a better life.";
str.lastIndexOf("e") // 24
str.lastIndexOf(`a`) // 12
```
- Description - `indexOf` just simply returns the last index position of the given parameter in the given string.

12. `padEnd`
- Parameter -
   * length of string we want to pad  (targetLength)
   *  (padString) string to pad the given string, if given nothing default is " " // `OPTIONAL`
- Return - returns a new string of specific given length with the padString applied at the end.
- Example - 
```js
let str = "I am having a better life.";
str.padEnd(32); // 'I am having a better life.      '
str.padEnd(34, `😎`); // 'I am having a better life.😎😎😎😎'
```
- Description - `padEnd` pads the given string to a given length with some padString (optional) from end of string.

13. `padStart`
- Parameter -
   * length of string we want to pad  (targetLength)
   *  (padString) string to pad the given string, if given nothing default is " " // `OPTIONAL`
- Return - returns a new string of specific given length with the padString applied at the start.
- Example - 
```js
let str = "I am having a better life.";
str.padStart(36, `😎`); // '😎😎😎😎😎I am having a better life.'
```
- Description - `padStart` pads the given string to a given length with some padString (optional) from start of string.

14. `repeat`
- Parameter - an integer (count) , telling no of times string should repeat.
- Return - return the given string with a specified number of copies . 
- Example -  
```js
let string = "RASHI";
string.repeat(2); // 'RASHIRASHI' 
string.repeat(2/0); // Uncaught RangeError:
```
- Description - `repeat` just returns the string copies given no of times.

15. `replace`
- Parameter -
- Return - a new string with the specified character/ string replaced ny the replacement.
- Example - 
```js 
let str = "I am having a better life.";
str.replace("better", "best"); // 'I am having a best life.'
str.replace("a better", "the best"); // 'I am having the best life.'
```
- Description - `replace` replaces the specified string.

16. `slice`
- Parameter -
  beginIndex - value to begin extraction
  endIndex -  value where to end extraction 
- Return -  a new string with extracted part of given string . 
- Example - 
```js
let str = "I am having a better life.";
str.slice(2, 5) // 'am '
str.slice(4, -7) // ' having a bette'
```
- Description - extracts a part of string.

17. `split`
- Parameter -
   separator Optional
   limit Optional
- Return - An Array of strings, split
- Example - 
- Description - split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.

18. `substring`
- Parameter -
indexStart
The index of the first character to include in the returned substring.

indexEnd Optional
The index of the first character to exclude from the returned substring.
- Return - A new string containing the specified part of the given string.
- Example - 
```js
let str = "I am having a better life.";
undefined
str.substring(2,20); // 'am having a better'
str.substring(9, 23); // 'ng a better li'
```
- Description - `substring` substring() method returns the part of the string between the start and end indexes
