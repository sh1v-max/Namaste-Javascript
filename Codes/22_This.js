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
