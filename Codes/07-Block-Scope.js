// what is block?
//^ a block or compound statement is a chunk of code bounded by {}. A block is a lexical scope.
//^ The variables we declare inside a block are only accessible inside that block.

{
  // block/compound statement
}

//when to use block?
//? when out code expects a single statement but we need to execute multiple statements

if(true){
  var a = 10;
  console.log(a);
}
//? as, if expects one statement but we are using a block to execute multiple statements
