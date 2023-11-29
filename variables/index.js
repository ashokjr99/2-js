/*
? Variables
    - containers that store data in memory
    * declaration
        - allows memory space to be reserved by using an identifier
        - starts with the keywords of (let, van, or const)
        - cannot start with a number, other than characters like (_ $)
        - if no value is assigned, it will be "undefined" by default
    * initialization
        - assignment of a data value
        - can be any value or data type (str, int, arr, fx, class, etc.)
        - can be reassigned (except for the const)
*/

// Variable Declaration

let myVar;
console.log(myVar);

// Variable initialization
let myFirstName = "Bob";
let myLastName = "Sharma";

console.log("The value of the firstname is:", myFirstName);
myFirstName = "Ashok";
console.log(
  "The value of the firstname is now:",
  myFirstName,
  "after reassignment"
);

// String concatenation
console.log(myFirstName + " " + myLastName);

let userName = "iamagamer10";
// String interpolation
console.log(`Hey, your username is : ${userName}`);
//(a)    (b)(c)      (d)
let address = "123 Main St, Salem, MA";
// a -keyword
// b - variable id
// c - assignment operator
// d - variable value assignment

const ssn = "555-55-5555";
// ssn = "something else"; //! Error Assignment to a const variable

/*
? Coding practice for variables
    - Be concise (ex: firstName instead of usersFirstBornBlondHairedName)
    - Be specific (ex: item instead of i)
    - Utilize camelCase (most popular in JS)
    - snake_case
    - PascalCase
    - skewer-case
    - nocase
    - SCREAMING_CASE (used for environment variables)
*/

// ! Challenge
/*
        * set variables of fName. lName, houseNumber, street, city, state, postal code
        * concatenate or interpolate them together
        * console log that result
        * spicy challenge:
            - assign the state value to be lowercased, when you console.log it, it should capitalize the state
*/

let fName = "Ashok";
let lName = "Sharma";
let houseNumber = 1233;
let street = "hill";
let city = "tulsa";
let state = "OK";
let postalCode = 22322;

console.log(`My name is 
${fName} ${lName} \n
${houseNumber} ${street} , ${city}, ${state.toUpperCase()} ${postalCode}`);
