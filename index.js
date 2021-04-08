// /**
//  * EXAMPLE 1 - Variable declaration
//  */

// var a;

// console.log(a);

// //console.log(b); //Uncaught ReferenceError: b is not defined

// let c;

// console.log(c);

// //const d; //Uncaught SyntaxError: Missing initializer in const declaration

// //code is evaluated before execution

// /**
//  * EXAMPLE 2 - "let"
//  */
// let myNumber=10;

// console.log(myNumber);

// //declaration
// let myString;

// console.log(myString);

// //assignment
// myString="Hello from String";

// console.log(myString);

// //re-assignment
// myString="New value for myString variable";

// console.log(myString);


// /**
//  * EXAMPLE 3 - "var"
//  */
//  var myNumber=10;

//  console.log(myNumber);
 
//  //declaration
//  var myString;
 
//  console.log(myString);
 
//  //assignment
//  myString="Hello from String";
 
//  console.log(myString);
 
//  //re-assignment
//  myString="New value for myString variable";
 
//  console.log(myString);
 

// /**
//  * EXAMPLE 4 - "const"
//  */

// const myBoolean = true;

// console.log(myBoolean);

// //myBoolean=false; //Uncaught TypeError: Assignment to constant variable.

// //const myBoolean = false; //Uncaught SyntaxError: Identifier 'myBoolean' has already been declared

// /**
//  * CHALLENGE 1
//  * 
//  * Declare varibale "myObject" and assign value {}
//  * Print this varibale to the console.
//  * NOTE: varibale "myObject" will not be reassigned in the future
//  */

// const myObject = {};

// console.log(myObject);

// //myObject={}; //Uncaught TypeError: Assignment to constant variable.

// /**
//  * CHALLENGE 2
//  * Declare "x" and assign value 10 to it.
//  * Declare "y" and assign value true to it
//  * Declare "myObject" and assign object  with two name-value pairs
//  * Declare "anotherObject"
//  * Later assign value to it - object with three name-value pairs
//  */

// //declaration of varibale x
// var x;
// //y is const as it will not change through out the challenge
// const y = true

// //assigning the value for x
// x=10;


// //creating constant object, because it wont be changed 
// //assigning object name-values
// const myObject={
//     a:x, 
//     b:y
// };

// //logging to the console
// console.log(myObject);

// /**
//  * {a:10, b:true, __proto__:Object}
//  */

// //declaring another varibale for object
// let anotherObject;

// //reassign value of x
// x=20;

// //assigning the varible object
// anotherObject={
//     newA:x,
//     b:y, 
//     c:myObject
// };

// //logging to the console
// console.log(anotherObject);

//  /**
//  * {newA:20, b:true,{a:10, b:true, __proto__:Object} __proto__:Object}
//  */

