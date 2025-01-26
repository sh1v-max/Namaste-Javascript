//& JS interview questions
//* Q1: What is Closure in Javascript?
// Ans: A function along with reference to its outer environment together forms a 
// closure. Or in other words, A Closure is a combination of a 
// function and its lexical scope bundled together.

//? example
//code 1
function outer() {
  var a = 10;
  function inner() {
      console.log(a);
  }
  return inner;
}
// outer()();//It still remembers the value of a variable.

//code 2
function outer() {
  var a = 10;
  function inner() {
      console.log(a);
  }
  return inner();
}
// outer()

// difference between code 1 and code 2
// code 1, inner is returned as a reference and invoked later (outer()())
// code 2, inner is immediately executer inside outer()(inner() is directly invoked)


//Changing position of variable
function outer() {
  // var a=10;
  function inner() {
      console.log(a);
  }
  var a = 10;//Even if we move the position of variable declaration it will still forms closure
  return inner;
}
// outer()();

//Changing var to let
function outer() {
  // var a=10;
  function inner() {
      console.log(a);
  }
  let a = 10;//Even if we change the var to let it will still form closure
  return inner;
}
// outer()();

//Pass an parameter in outer function
function outer(b) {
  function inner() {
      console.log(a, b);
  }
  let a = 10;
  return inner;
}
var close = outer("Hello");
// close();

//another variable outside the outer function
function outest() {
  var c = 20
  function outer(b){
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer
}
var close = outest()("Hello");
close()

// as inner function forms a closure with it's outer environment so sequence 
// does not matter

//* Q2: What are the advantages of Closure in Javascript?
// Ans: 1. module design pattern
// 2. currying
// 3. function factory
// 4. memoization
// 5. maintaining state in async code as in setTimeout
// 6. data hiding and encapsulation