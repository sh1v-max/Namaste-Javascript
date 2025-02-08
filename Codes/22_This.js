// "use strict";
//* this keyword
// this keyword refers to the object it belongs to
// It has different values depending on where it is used:

//===============================================================
//? in global space
// in global space, this refers to global object (window in browser, global in node)
// console.log(this); // window

//===============================================================
//? inside function
// based on non-strict mode(default), this will be global object
// based on strict mode, this will be undefined
function x() {
  // the below value depends on strict/non-strict mode
  console.log(this);
  // in strict mode - undefined
  // in non-strict mode - refers to global window object
}
// x();
// window.x(); // window

//& this substitution
// according to this substitution, if the value of this keyword is 
// null/undefined, it will be replaced with global object (in non-strict mode)
// this is the reason why this refers to global window object inside function in non-strict mode

//~ if the value of this keyword is undefined or null, this keyword
// will be replaced with globalObject only in non-strict mode

//===============================================================
//? inside object/object method
// a function, if a part of object is called a method
const obj0 = {
  a: 10,
  x: function () {
    console.log(this); // {a: 10, x: f()}
    console.log(this.a); // 10
  },
};
// obj0.x(); // value of `this` is referring to current object i.e. `obj`
// output: 
// {a: 10, x: f()}
// 10

//===============================================================
//? explicit binding
// this can be explicitly set using call(), apply(), bind()
//~ call() and apply() are used to call a function with a given `this` value
const student = {
  name: "wazir",
  printName: function () {
    console.log(this.name);
  },
};
// student.printName(); // wazir

const student2 = {
  name: "shiv",
};
// student2.printName(); // throw error

// how to re-use printName method from `student` object
// student.printName.call(student2); // shiv
// Above `call` method is taking the value of `this` keyword
// So, Inside `printName` method value of `this` is now `student2` object

// So, call, bind and apply is used to set the value of this keyword.

//===============================================================
//? arrow function
// arrow function does not have its own this
// they take the value from enclosing lexical context
//! enclosing lexical context

const obj = {
  a: 10,
  x: () => {
    console.log(this); // it will behave like it's in global space
  },
};
obj.x() // will refer to global object, return window object

// other example
const obj2 = {
  a: 10,
  x: function (){
    // enclosing arrow function inside a function which is 
    // a method of an object
    const y = () => {
      console.log(this); // {a: 10, x: f()
      // in this case, it will refer to the place where the arrow function is lexically enclosed
    }
    y()
  }
};
obj2.x()

// above code will behave exactly like:
const obj3 = {
  a: 10,
  x: function (){
    console.log(this); // {a: 10, x: f()}
    // as if there is no arrow function
  }
};
// obj3.x()

//===============================================================
//? with dom event
// reference to the HTMLelement that triggered the event
/* <button onclick="alert(this)">Click Me</button>*/
// [object HTMLButtonElement] Button element -->

//! summary
//? in global space >> globalObject >> window (browser) / global (node)
//? inside function >> globalObject (non-strict) / undefined (strict)
  // x(); // window (non-strict) / undefined (strict)
  // window.x(); // window 
