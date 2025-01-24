// what is closure?
//^ function along with it's lexical scope bundled together forms closure
//^ closure is a function that has access to it's outer function scope even after the outer function has returned

// basic function inside another function
function x(){
  var a = 7
  function y(){
    console.log(a)
  }
  y()
}
// x()

// closure when return a function within one function
function x() {
  var a = 9;
  function y() {
      console.log(a);
  }
  // y();
  return y;//In javascript you can return the functions
}
// var z = x;
// console.log(z);//It will return the function y along with closure formed.
// console.log(z);//It will return what is present in the function y along with closure formed.
//z(); //It will still return the value of a.

//? when a function is returned from another function they will still have access to the outer function scope or their lexical scope

// dive deep into closure
function b(){
  var a = 100
  function c(){
    var b = 10
    function d(){
      console.log(a,b) 
    }
    d()
  }
  c()
}
// b()

// with setTimeout
function x(){
  var i = 1
  setTimeout(function(){
    console.log(i)
  }, 1000)
}
x()
// above settimeout will return 1 even without calling the function x() because of closure
// cuz this is how javascript even loop works abd the asynchronous nature of setTimeout
//? it forms closure too