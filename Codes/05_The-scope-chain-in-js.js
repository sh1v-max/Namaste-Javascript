// what is scope?
//^ Scope is the current context of the code, which determines the accessibility of variables to JavaScript. The two types of scope are global and local.

function a(){
  var b = 10
  c()
  function c(){
    console.log(b)
  }
}

a()
console.log(b)