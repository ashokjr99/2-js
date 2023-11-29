console.log("hello world");

/*
?    -    Javascript
    - found in 1996 by Brandon Eich
    - client sided language (runs in the browser)
    - interpreted language (not compiled)
    - functional language 
    - object oriented (OOP)
    - prototype-based
    - weakly typed (dynamic)
    - multi paradigm languages
    - ECMA script - organization for setting the language standards
*/

/*
?   -   Console Object
    - gives us access to the browser or node's debugging console
    - allows the developer the view the output from their program
*/

//! 2+2 does not show us the output
console.log(2 + 2); //shows the output of 4

/*

JS Data Types:
    Primitives
        * strings
        * numbers
        * boolean
        * null
        * undefined
        * NaN (Not a Number)
    References
        * arrays
        * objects
        * maps
        * sets
*/

/*
?   Strings
        * primitive data types representing characters
        * enclosed in '', "", or ``
    Examples:
*/

console.log("This is a test");
console.log('This is a test');
console.log(`This is a test`);

// String Representation of number
console.log("2023");

//We can concatenate different strings (adding them together)
console.log("Hello, I'm Ashok "  +  "and I like apple pie");

//Strings are also indexed starting from (0)
console.log("sdfdsfsdfdsfsdfsfdsdf"[4]);

// String Interpolation (``)
    // * process of including space for an expression
    // Syntax:
        // - `string $ {5+5}`


console.log(`My favorite number is: ${5+5}`)    

/*
? String
    -   .length
    -   .slice
    -   .toUpperCase()
    -   .toLowerCase()
*/

console.log("some string".length);
console.log("some string again".slice(0,4));
console.log("some String again".indexOf("S"));
//Multi line strings

console.log ("Hello \n this \n is \n multi \n lined");

console.log(typeof "blah blah blah"); //string
console.log(typeof 9); //number

/*
? Booleans
    * binary value
    * either true (on) or false (off)
    * Examples of falsey values:
            - 0
            - undefined
            - null
            - NaN
            - ""
*/

console.log(2 == 2);
console.log(2 == 5);

// Boolean() interface that can return true or false, or if a value is truthy or falsey
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));


/*
?       Type Coercion
            * JS is a weakly typed programming language
            * doesn't require any data type definitions
            * comparison operator (==) performs type coercion before resolving the expression
                - will check the data values, but NOT their types
            * strictly equals (===) used to avoid type coercion
                - will check the data type values and types



*/

console.log(2 == 2);
console.log(2 =="2"); // true
console.log(2 === "2"); // false

/*
?       Not a number (NaN)
        * triggered when performing operations with numbers and non numbers
        * used when making mathematical computations that don't make sense


*/

console.log(undefined + 6);
console.log(Math.sqrt (-1_));

/*
?       Operators
        * addition (+)
        * subtraction (-)
        * multiply (*)
        * division (/)
        * exponent (**)
        * dot (.)
        * modulo (%)
        * assignment (=)
        * comparison (==)
        * strict comparison (===)
        * is not equal (!=) or is strictly not equal (!==)


*/

// Dot or Member Access Operator
console.log("Ashok sharma".toUpperCase());
console.log("Ashok sharma".length);

// Modulo
console.log(10 / 2);
console.log(10 % 2 === 0); // true, divisible by 2 with no remainder
console.log(10 % 3 === 0); // false, not able to be evenly divided by 3

// Assignment

let myName = "Ashok Sharma" ;

console.log(myName);

console.log(myName == "Ashok Sharma");

// Strict Comparison
let myVal = "10";
console.log(myVal === "10");

// Is not equal
console.log(2!=2); // returns false (even though its true; it flips the value)
console.log(!true); // returns false, flipped value

// Real life example
if (!myName) {
    console.log("Name does not exist")
} else {
    console.log ("Hello", myName)
}

// ? Arrays
        //1             //2             //3
let arrayOfStuff = ["item1", "item2", "", true, 10];
// 1. name of the variable to store the array
// 2. the item within the array
// 3. can use various data-types within arrays
// - denoted by the square brackets
// - each item has an assigned index value

console.log(arrayOfStuff [0]);

console.log(Array,isArray(arrayOfStuff));

// ? Objects

        let userProfile = new Object();
        userProfile.name = "Ashok";
        userProfile.favColor = "blue";

        console.log(userProfile);

        let character = {
            name: "Sonic the Hedgehog",
            rings: 40,
            emeralds: 5,
            lives: 3,
        }
console.log(character);
