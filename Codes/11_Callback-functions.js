//* what is callback function?
// a callback function is a function that is passed as an argument to another function, to be "called back" at a later time
// take a function A and pass it to another function B, A is callback function
//? JS is a synchronous and single threaded language. but due to callbacks, we can do async things

function x(y){
  console.log('x')
  y()
}
x(function y(){
  console.log('y')
}) // y is callback function

//* callback function with setTimeout
setTimeout(function () {
  console.log("timer")
}, 5000);

//* what is blocking the main thread
// when we have a long running task, it blocks the main thread, ie the call stack
