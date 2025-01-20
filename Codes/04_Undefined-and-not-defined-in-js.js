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