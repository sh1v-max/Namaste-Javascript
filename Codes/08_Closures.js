// what is closure?
//^ function along with it's lexical scope forms closure
//^ closure is a function that has access to it's outer function scope even after the outer function has returned

function x(){
  var a = 7
  function y(){
    console.log(a)
  }
  y()
}
x()