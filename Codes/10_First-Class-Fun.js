//* function statement aka function declaration
function a(){
  console.log('I am function statement');
}

//* function expression
// a function that is stored in a variable
var b = function (){
  console.log('I am function expression');
}

//& difference between function statement and expression
// the major difference between these two lies in hoisting

// a() // I am function statement
// c() // TypeError: c is not a function
function a(){
  console.log('I am function statement');
}

var c = function (){
  console.log('I am function expression');
}

// during memory creating phase, a is created in memory and function assigned to a.
// but b is created like a variable (b:undefined, until code reaches to b)
// so it doesn't support hoisting 

//* what is anonymous function?
// a function without a name

//? function (){

// }

// this is going to throw syntax error- function statement requires function name
// anonymous functions are used at the place of value
// use anonymous function to assign it to some variable, and not as a function statement

//* named function expression
// same as function expression but with a name
var d = function xyz(){
  console.log('I am named function expression');
  console.log(xyz) // I am named function expression
}
// d()
// xyz() // ReferenceError: xyz is not defined
// xyz is not available outside the function, created in global scope
// you can access it inside the function

//* parameter vs argument
var e = function(param1, param2){ // param are the local variables inside the function
  console.log(param1, param2)
}
e('argument1', 'argument2') // argument are the values passed to the function

//* what is first class function? 
// a function that can be treated like any other values
// can be assigned to a variable
// can be passed as an argument
// can be returned from another function

// we can pass a function inside a function as argument and/or return a function (HOF)
