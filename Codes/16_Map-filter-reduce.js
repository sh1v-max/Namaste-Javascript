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