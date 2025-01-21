// what is scope?
//^ Scope is the current context of the code, which determines the accessibility of variables to JavaScript. The two types of scope are global and local.

// what is lexical environment or scope?
//^ lexical environment is the local memory along with the lexical environment of its parent


function a(){
  var b = 10
  c()
  function c(){
    console.log(b) 
  }
}

a()
console.log(b) //Uncaught reference undefined error b 

// here lexical environment of c will be it's scope plus lexical environment of its parent
//? lexical environment
//? scope
//? scope chain