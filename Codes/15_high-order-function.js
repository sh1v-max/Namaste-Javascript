//* what is high order function
// high order function are regular function that take another functions as 
// arguments or return functions as their results

// example
function x(){
  console.log('hi')
}
function y(x){
  x()
}
y(x)
// y is a high order function
// x is a callback function

//=========================================================
// example
const radius = [3, 1, 2, 4];

const calculateArea = function(radius){
  const output = []
  for(let i = 0; i < radius.length; i++){
    output.push(Math.PI * radius[i] * radius[i])
  }
  return output
}

console.log(calculateArea(radius))

const calculateCircumference = function(radius){
  const output = []
  for(let i = 0; i < radius.length; i++){
    output.push(2 * Math.PI * radius[i])
  }
  return output
}

console.log(calculateCircumference(radius))

const calculateDia = function(radius){
  const output = []
  for(let i = 0; i < radius.length; i++){
    output.push(2 * radius[i])
  }
  return output
}

console.log(calculateDia(radius))

// as we can see the above code is repeating itself
// we can make it better by using high order function


//* By functional programming using generic function
const area = function (radius) {
  return Math.PI * radius * radius;
}
const circumference = function (radius) {
  return 2 * Math.PI * radius;
}
const diameter = function (radius) {
  return 2 * radius;
}

// using this, we will directly pass logic to the function
// as a callback function
// and that will be a high order function

// and now, to calculate area, circumference and diameter

const calculateArea0 = function (radius, logic) {
  const output = []
  for(let i = 0; i < radius.length; i++){
    output.push(logic(radius[i]))
  }
}