//? map, filter, reduce
// all are higher order functions

//*map
// map is a method that creates a new array with the results of calling a provided function on every element in the calling array
// returns a new array with the same length as the original array

const arr = [5, 1, 8, 7, 4];

//Double- [10,2,16,14,8]
function double(x) {
    return x * 2;
}

//Triple  the array
function triple(x) {
    return x * 3
}

//Binary values of  the array
function binary(x) {
    return x.toString(2);
}

console.log(arr.map(double));
console.log(arr.map(triple));
console.log(arr.map(binary));

//? can also be written as
// directly adding function inside map
const doubleMap = arr.map(function (x) {
    return x * 2;
})
// console.log(doubleMap);

// or with arrow function
const doubleArrow = arr.map((x) => x * 2)
// console.log(doubleArrow);

//* filter
// filter is a method that creates a new array with all elements that pass the test implemented by the provided fun
// returns a new array with the elements that pass the test
// if no elements pass the test, an empty array will be returned

//const arr = [5, 1, 8, 7, 4];
function isOdd(x) {
  return x % 2;
}
function isEven(x) {
  return x % 2 === 0;
}
function greaterThanFour(x) {
  return x > 4;
}
console.log(arr.filter(isOdd))
console.log(arr.filter(isEven))
console.log(arr.filter(greaterThanFour))

//? can also be written as
// directly adding function inside filter
const isOddFilter = arr.filter(function (x) {
    return x % 2;
})
// console.log(isOddFilter);

// or with arrow function
const isOddArrow = arr.filter((x) => x % 2)
// console.log(isOddArrow);

//* reduce
// reduce is a method that executes a reducer function on each element of the array, resulting in a single output value
// use reduce when you want to come up with single value as a result
// returns a single value
// reducer function takes 4 arguments
// accumulator, currentValue, currentIndex, array
// accumulator is the value returned by the last iteration
// currentValue is the current element being processed
// currentIndex is the index of the current element being processed
// array is the array reduce was called upon