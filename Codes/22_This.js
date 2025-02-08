// "use strict";
//* this keyword
// this keyword refers to the object it belongs to
// It has different values depending on where it is used:

//===============================================================
//? in global space
// in global space, this refers to global object (window in browser, global in node)
console.log(this); // window

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
x();
// window.x(); // window

//& this substitution
// according to this substitution, if the value of this keyword is 
// null/undefined, it will be replaced with global object (in non-strict mode)
// this is the reason why this refers to global window object inside function in non-strict mode

//~ if the value of this keyword is undefined or null, this keyword
// will be replaced with globalObject only in non-strict mode

//===============================================================
//? inside object

const obj = {
  a: 10,
  x: function () {
    console.log(this); // {a: 10, x: f()}
    console.log(this.a); // 10
  },
};
obj.x(); // value of `this` is referring to current object i.e. `obj`



//! summary
//? in global space >> globalObject >> window (browser) / global (node)
//? inside function >> globalObject (non-strict) / undefined (strict)
  // x(); // window (non-strict) / undefined (strict)
  // window.x(); // window 
