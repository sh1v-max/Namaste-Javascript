// something is created by javascript engine without even
// writing a single line of code in the File
// and that is called global object
// here, we're talking about windows and this keyword

//~ window is a global object which is created along with the global execution context
//? before any program is run, a global object is created and a global execution context is created
// and this global object, in case of browsers, called the window object
//& everything you see in the top level is global scope


var a = 10; // global variable
function b(){
  var x = 10 // local variable
}


console.log(window.a) // 10
console.log(a) // 10
console.log(x) // ReferenceError: x is not defined