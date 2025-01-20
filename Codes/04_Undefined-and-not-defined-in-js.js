// undefined is like a placeholder that is placed in the memory when a variable is declared but not assigned a value.
// not defined is when a variable is not declared at all

console.log(a); // undefined
var a = 10;
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined

// checking defined and undefined cases
console.log(a)
var a
console.log(a)
a = 5
if(a === undefined){
  console.log('a is undefined')
}
else{
  console.log('a is not defined')
}

// javascript is loosely typed language
// we can store anything inside a variable, wether a string or a number
var b;
console.log(b); // undefined
b = 10;
console.log(b); // 10
b = "hello wazir"
console.log(b); // hello wazir

//! it's not recommended to put undefined in a variable
// it's not a mistake tho