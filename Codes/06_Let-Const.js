// temporal dead zone?
//^ temporal dead zone is a time between the entering of the scope and the actual declaration of the variable
// let and const too do follow hoisting but they're not initialized with undefined, and they're in temporal dead zone
// whe you try to initialize a variable when they're in temporal dead zone
//: you will get a reference error
// they can only be accessible after some value is initialized to them

console.log(b);//undefined
// console.log(a);//It will throw an error, accessing before initialization
let a = 10;
// let a=100; Syntax error i.e duplicates are not allowed
console.log(a);
var b = 20;
var b = 200;//But in case of var duplicates are allowed
console.log(b);

//const in js
let c;//Can initialize later in let
const d = 100;
d = 1000; // Error that you can't change the value of const variable
// const d; 
// d=100; initializing later will directly throw an error
c = 10;
console.log(c);

//! referenceError: cannot access 'e' before initialization, because of temporal dead zone
//! syntaxError: because of duplicate declaration
//! typeError: because of changing the value of const variable