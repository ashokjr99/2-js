//? Scope & Hoisting

/*
    ? Scope
    * Used to determine how information in different code blocks can be accessed
        ? Five scope types:
            * Global/window
            * Block
            * Function
            * Module - if use external files
            * Lexical
        
    In JS, inner scopes can access outer scopes, outer scopes cannot access inner scopes
*/

/*
    ? Global Scope
        * Outer most scope
        * window object when in the client/browser
        * in the js file when in Node
        * accessible from every other scope
*/
// outside
let globalScopedVariable = "This is a global scope variable";

{
  {
    {
      {
        {
          {
            {
              console.log(globalScopedVariable);
              let innerScopedVariable = "This is a inner scoped variable"; //created with inner scope
            }
          }
        }
      }
    }
  }
}

// console.log(innerScopedVariable); //! ERROR: innerScopedVariable is not defined

//? Var vs Let in scope

{
  let x = 5;
}

// console.log(x);//! ERROR

{
  {
    {
      var y = 5;
    }
  }
}

console.log(y); //! Var keyword in inner scope 'bleeds'/polutes into the outer scope
//! Avoid using 'var', use 'let' instead
/*

    ? Function Scope
    * Accessible only inside of the function

*/

function scope() {
  let fxScopeVariable = "This is a function scope variable";
  console.log(fxScopeVariable);
}

scope(); // == "This is a function scope variable"
// console.log(fxScopeVariable); //! ERROR : Reference error

/*
    ? Block Scope
    * Anywhere there are {}
*/

{
  let blockScopeVariable = "Block scope variable";
}

// console.log(blockScopeVariable); //! ERROR : Reference error

/*
    ? Lexical Scope
    * Variables are accessible by their nested position
    * Inner fx scope {} can access outer function scope {}
*/

function outerFx() {
  let ofxv = "Outer fx scope variable";

  function innerFx() {
    let ifxv = "Inner fx scope variable";
    return ifxv;
  }

  return innerFx(); // === "Inner fx scope variable"
}

console.log(outerFx()); // === "Inner fx scope variable"

/*
    ? Hoisting 
    * JS' parsing engine reads top to bottom, left to right
    * JS' interpreter runs the code twice
        - First, it looks for VARiables and fx declarations and hoists them
        - It allocates memory space for those declarations
        - It then executes the code line-by-line
*/

// console.log(myDog); //! ERROR Cannot access 'myDog' before initialization
let myDog = "lab";
console.log(myDog);

console.log(age); //! Returns undefined
var age = 32;
console.log(age); // prints our value of 32

x(); // Traditional functions get hoisted. Able to call them before they are declared

function x() {
  console.log("function declaration x executed");
}

// y(); //! Error, function expressions are not hoisted

let yfxExp = function () {
  console.log("Function expression");
};

yfxExp();

function run() {
  var foo = "foo";
  let bar = "bar";
  var fxVariable = "test";
  console.log(foo, bar, fxVariable);

  {
    var moo = "moo";
    let baz = "baz";
    console.log(moo, baz);
  }

  //   console.log(baz); //! Error, trying to access a nested scoped variable
  console.log(moo); // Able to print, because var can be accessed by outer scope
}

run();
// console.log(fxVariable); //! ReferenceError: fxVariable is not defined

//! Using var is bad practice, don't try to use hoisting to your "benefit"!!!!!!
