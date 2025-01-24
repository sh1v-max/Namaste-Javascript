//& what is closure?
//^ function along with it's lexical scope bundled together forms closure
//^ closure is a function that has access to it's outer function scope even after the outer function has returned

//* basic function inside another function
function x(){
  var a = 7
  function y(){
    console.log(a)
  }
  y()
}
// x()

//* closure when return a function within one function
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

//* dive deep into closure
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

//=================================================================

//* with setTimeout
function x(){
  var i = 1
  setTimeout(function(){
    console.log(i)
  }, 1000)
}
// x()
// above settimeout will return 1 even without calling the function x() because of closure
// cuz this is how javascript even loop works abd the asynchronous nature of setTimeout
//? it forms closure too

//* another example
function x(){
  var i = 1
  setTimeout(function(){
    console.log(i)
  }, 3000)
  console.log('namaste javascript') //It will first print this console then wait for 3000ms to print the value of i
}
// x() // this settimeout will print the value o i = 1 after 3 sec
// output: namaste javascript
// 1 (after 3 sec)

//^ Print the number 1 to 5 after each seconds using setTimeout by using var

//* basic method (wrong method, with var)
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
  console.log('Namaste JavaScript')
}
// x()
// it will print 6 five times after 1 sec
// this is because of the asynchronous nature of setTimeout
//! it remembers the reference to i not the value of i (remember that)
// and as loop runs for the first time, i already becomes 6 every time and settimeout runs after 1 sec with initial value of i = 6
// and with VAR, it is not confined to the block inside the look but to the entire c()

//* correct method 1 (using let)
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }
  console.log('Namaste JavaScript')
}
// x()
// it will print 1 to 5 after each sec
// because let has block scope and it creates the new copies i after every loop
// it makes 5 copies of variable i and each copy is confined to the block inside the loop ie. settimeout each time it runs for every delay of 1 sec

//* correct method 2 (using closure), if interviewer ask to use var
function x() {
  for (var i = 1; i <= 5; i++) {
      function close(x) {
          setTimeout(function () {
              console.log(x);
          }, x * 1000);
      }
      close(i);//every time we call this function again it will provide the new value of i and now it will work with var
  }
  console.log("Namaste JavaScript")
}
x();
// in this case, we're creating new copy of i and passing it to the function close ie. to x