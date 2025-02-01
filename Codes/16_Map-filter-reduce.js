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