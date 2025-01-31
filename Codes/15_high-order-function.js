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
// y(x)
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

// console.log(calculateArea(radius))

const calculateCircumference = function(radius){
  const output = []
  for(let i = 0; i < radius.length; i++){
    output.push(2 * Math.PI * radius[i])
  }
  return output
}

// console.log(calculateCircumference(radius))

const calculateDia = function(radius){
  const output = []
  for(let i = 0; i < radius.length; i++){
    output.push(2 * radius[i])
  }
  return output
}

// console.log(calculateDia(radius))

// as we can see the above code is repeating itself
// we can make it better by using high order function

//=========================================================
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
// separate the logic from the function
// using this, we will directly pass logic to the function
// as a callback function
// and that will be a high order function

// and now, to calculate area, circumference and diameter

const calculate = function (radius, logic) {
  const output = []
  for(let i = 0; i < radius.length; i++){
    output.push(logic(radius[i]))
  }
  return output
}

// console.log(calculate(radius, area))
// console.log(calculate(radius, circumference))
// console.log(calculate(radius, diameter))

// HOF require less code and more readable
// it is more maintainable
// is reusable
// we are not repeating a lot of code
// Map function // although it is same as above function 


//=========================================================
//* polyfill for map function
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
      output.push(logic(this[i]))
  }
  return output;
}

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));

// with Map function
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));