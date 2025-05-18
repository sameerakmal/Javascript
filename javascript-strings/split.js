let names = 'spirit, salaar, shashu, darling, mrperfect';

// Basic split using comma
var output = names.split(',');
console.log(typeof output, output);  
// Output: object [ 'spirit', ' salaar', ' shashu', ' darling', ' mrperfect' ]
// Splits entire string by ',' and returns an array of substrings

// Split with limit of 2
var output = names.split(',', 2);
console.log(typeof output, output);  
// Output: object [ 'spirit', ' salaar' ]
// Only first 2 items are returned, rest are ignored

// Split with limit of 4
var output = names.split(',', 4);
console.log(typeof output, output);  
// Output: object [ 'spirit', ' salaar', ' shashu', ' darling' ]
// Only the first 4 parts are returned

// Using number 0 as separator — JS converts it to string '0'
console.log("Hello0123".split(0));
// Output: [ 'Hello', '123' ]
// The character '0' is treated as separator

// Splitting empty string into characters
console.log("".split(''));
// Output: []
// Empty string results in empty array

// Splitting non-empty string into characters
console.log('Hello user'.split(''));
// Output: [ 'H', 'e', 'l', 'l', 'o', ' ', 'u', 's', 'e', 'r' ]
// Each character becomes an element in the array

// Splitting using undefined — acts like splitting by whole string
console.log('Hello user'.split(undefined));
// Output: [ 'Hello user' ]
// No match for undefined as separator, so entire string is returned in array

// Splitting using null — same as splitting by the string 'null'
console.log('Hello user'.split(null));
// Output: [ 'Hello user' ]
// No occurrence of 'null' so original string is returned

// Split with empty string and limit 0
console.log('hello user'.split('', 0));
// Output: []
// Limit 0 means return nothing, so an empty array is returned

// Edge case: multiple commas
console.log('P,W,,'.split(','));
// Output: [ 'P', 'W', '', '' ]
// Empty string between and after commas is preserved as elements

console.log('P,W,'.split(','));
// Output: [ 'P', 'W', '' ]
// Last empty string is added because string ends with comma
