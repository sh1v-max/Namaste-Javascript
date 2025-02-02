// callback are important while writing asynchronous code
// drawback of callback is that it leads to"

//* callback hell
// callback hell is a situation where you have multiple nested callbacks which make the code hard to read and debug

// Example of callback hell
setTimeout(() => {
    console.log('1st callback')
    setTimeout(() => {
        console.log('2nd callback')
        setTimeout(() => {
            console.log('3rd callback')
            setTimeout(() => {
                console.log('4th callback')
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
// this is a simple example of callback hell, it can get more complex with more nested callbacks
// also know as pyramid of doom
// hard to read and debug
//? solution to callback hell

//& named functions
function first() {
  console.log('1st callback');
  setTimeout(second, 1000);
}

function second() {
  console.log('2nd callback');
  setTimeout(third, 1000);
}

function third() {
  console.log('3rd callback');
  setTimeout(fourth, 1000);
}

function fourth() {
  console.log('4th callback');
}

setTimeout(first, 1000);


// example with e commerce website, its cart
const cart = ["pants", "shoes", "watch"]