// what is block?
//^ a block or compound statement is a chunk of code bounded by {}. A block is a lexical scope.
//^ The variables we declare inside a block are only accessible inside that block.

//block
{
  // block/compound statement
}

//Block Scope
{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
// console.log(b); //Uncaught reference error due to the block scope
// console.log(c);

//when to use block?
//? when out code expects a single statement but we need to execute multiple statements

if(true){
  var a = 10;
  console.log(a);
}
//? as if expects one statement but we are using a block to execute multiple statements
 
var a = 100
{
  var a = 10
  let b = 20
  const c = 30
  console.log(a);
  console.log(b);
  console.log(c);
}
// console.log(a);
// console.log(b);
// console.log(c);
// here, const and let are block scope and will no longer be accessible outside the block

// what is shadowing? 
//? when a variable declared in a block has the same name as a variable in the outer block, the outer variable is shadowed by the inner variable
//? we cannot shadow let with var. but it's valid to shadow a let using a let. however we can shadow var with let

// shadowing with var
var a = 100
{
  var a = 10
  console.log(a); //10
}
console.log(a); // 10
// it will also modify outside a


// shadowing with let/const
let a = 100
{
  let a = 10
  console.log(a); //10
}
console.log(a); // 100
// in case of let, it wont shadow the outer variable
// we'll have b in 2 scopes, block and the script (outside the block)
//? shadow will work similarly in case of functions

//Shadowing for function
var c = 10;
function d() {
    var c = 25;
    console.log(window.c);//Inside block scope o variable 
    window.c = 20;
}
d();
console.log(c);//Outside block scope o variable 

//illegal shadowing
// let x=200;
var x = 12;  // but we can shadow var using let
{
    // var x=20;//you cannot shadow let using var 
    let x = 20;// But you can shadow let using let
    console.log(x);
}
console.log(x);