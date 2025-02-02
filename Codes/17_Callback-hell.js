// callback are important while writing asynchronous code
// drawback of callback is that it leads to"

//* callback hell
// callback hell is a situation where you have multiple nested callbacks which make the code hard to read and debug

// Example of callback hell
// setTimeout(() => {
//     console.log('1st callback')
//     setTimeout(() => {
//         console.log('2nd callback')
//         setTimeout(() => {
//             console.log('3rd callback')
//             setTimeout(() => {
//                 console.log('4th callback')
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
// this is a simple example of callback hell, it can get more complex with more nested callbacks
//The structure will grow horizontally instead of growing vertically which leds to form pyramid of doom of code.
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
// setTimeout(first, 1000);

//& Promises
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000)
  .then(() => {
      console.log("1st callback");
      return delay(1000);
  })
  .then(() => {
      console.log("2nd callback");
      return delay(1000);
  })
  .then(() => {
      console.log("3rd callback");
      return delay(1000);
  })
  .then(() => {
      console.log("4th callback");
  });

//& async/await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function execute() {
  await delay(1000);
  console.log("1st callback");

  await delay(1000);
  console.log("2nd callback");

  await delay(1000);
  console.log("3rd callback");

  await delay(1000);
  console.log("4th callback");
}

// execute();


// example with e commerce website
const cart = ["pants", "shoes", "watch"]
api.createOrder(cart, function () { // to create order
  api.makePayment(function () { // to make payment
      api.showSummary(  // to show summary
          function () {
              api.updateWallet() // to update wallet
          }
      )
  })
})
// create order calls makePayment, makePayment calls showSummary and showSummary calls updateWallet
// and code start growing horizontally instead of vertically
// this is called callback hell
// makes code hard to read, debug, and maintain

//? so what basically is callback hell?
// once callback inside another callback inside another callback and so on

//* inversion of control
// the callback function is passed to another callback, this way we lose the control
// of code, we don't know what is happening behind the scene and 
// the program becomes very difficult to maintain and debug
// this is called inversion of control

// in above example, we don't know what is happening inside createOrder, makePayment, showSummary
// we just gave createOrder api the permission to call makePayment, makePayment to call showSummary