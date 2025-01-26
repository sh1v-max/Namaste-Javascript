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
// close()

// as inner function forms a closure with it's outer environment so sequence 
// does not matter

//* Q2: What are the advantages of Closure in Javascript?
// Ans: 1. module design pattern
// 2. currying
// 3. function factory
// 4. memoization and once function
// 5. maintaining state in async code as in setTimeout
// 6. data hiding and encapsulation

//* examples of data hiding and encapsulation

var count = 0
function incrementCounter(){
  count++
  console.log(count)
}
// major flaw is that count is global and can be accessed and modified from anywhere

// here comes data hiding or encapsulation
function counter(){
  var count = 0 // nobody can access this variable from outside, its hidden
  return function incrementCounter(){
    count++
    console.log(count)
  }
}
// we are wrapping the count variable inside a function to form a closure and returning the inner function
var counter1 = counter()
// counter1() // 1
// counter1() // 2 call it as many times to get incremented value

var counter2 = counter()
// counter2() // 1
// counter2() // 2 counter 2 is different from counter 1 and is independent
// this time, it creates a new closure with a new count variable and form a new independent copy

//? above code is not good and scalable for say, when you plan to implement a decrement function

//* to solve this, we can use constructor function
function Counter(){ // it's recommended to use PascalCase for constructor function
  var count = 0
  this.incrementCounter = function(){
    count++
    console.log(count)
  }
  this.decrementCounter = function(){
    count--
    console.log(count)
  }
}
var counter1 = new Counter() // new keyword creates a new instance of Counter, should use new keyword
counter1.incrementCounter() // 1
counter1.incrementCounter() // 2
counter1.decrementCounter() // 1

//* Q3: What are the disadvantages of Closure in Javascript?
// Ans: 1. memory leak, or over consumption of memory
// 2. performance issue
// 3. security issue
// 4. garbage collection issue
// what is garbage collection? It's a process of automatically deleting unused memory
// and using closure, it's difficult to determine when to delete the memory

function a (){
  var x = 10, z = 20
  return function b(){
    console.log(x)
  }
}
var c = a()
c() // 10
// once a is called, it's variables should be garbage collected ideally, but function b is still holding the reference to x
// so, x is not garbage collected
// but z is garbage collected(smartly) as it's not used by b