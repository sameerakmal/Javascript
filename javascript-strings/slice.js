let str = 'sachinrameshtendulkar'; // length = 21
//         012345678901234567890

console.log("Original string:", str);
console.log("Length:", str.length);

// Example 1: slice from index 6 to 16 (not inclusive)
console.log("str.slice(6,16):", str.slice(6,16)); 
// Output: "rameshtend"

// Example 2: slice from index 6 to -5 => 6 to (21 - 5) = 16
console.log("str.slice(6,-5):", str.slice(6,-5)); 
// Output: "rameshtend"

// Example 3: full slice, no arguments
console.log("str.slice():", str.slice()); 
// Output: "sachinrameshtendulkar"

// Example 4: slice from -6 to -9 (invalid as start > end)
console.log("str.slice(-6,-9):", str.slice(-6,-9)); 
// Output: ""

// Example 5: slice from -9 to -6 => (21-9)=12 to (21-6)=15
console.log("str.slice(-9,-6):", str.slice(-9,-6)); 
// Output: "end"

// Example 6: slice with NaN => treated as 0
console.log("str.slice(NaN, NaN):", str.slice(NaN, NaN)); 
// Output: ""

// Example 7: slice with undefined => treated as full slice
console.log("str.slice(undefined, undefined):", str.slice(undefined, undefined)); 
// Output: "sachinrameshtendulkar"

// Example 8: slice(null, null) => 0 to 0
console.log("str.slice(null, null):", str.slice(null, null)); 
// Output: ""

// Example 9: slice(null, undefined) => 0 to end
console.log("str.slice(null, undefined):", str.slice(null, undefined)); 
// Output: "sachinrameshtendulkar"

// Example 10: slice(true, true) => 1 to 1
console.log("str.slice(true, true):", str.slice(true, true)); 
// Output: ""

// Example 11: slice(true, false) => 1 to 0
console.log("str.slice(true, false):", str.slice(true, false)); 
// Output: ""

// Example 12: slice(false, true) => 0 to 1
console.log("str.slice(false, true):", str.slice(false, true)); 
// Output: "s"

// Example 13: slice(false, null) => 0 to 0
console.log("str.slice(false, null):", str.slice(false, null)); 
// Output: ""

// Example 14: slice(false, undefined) => 0 to end
console.log("str.slice(false, undefined):", str.slice(false, undefined)); 
// Output: "sachinrameshtendulkar"
