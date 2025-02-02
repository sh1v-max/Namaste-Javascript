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


// example with e commerce website, its cart
const cart = ["pants", "shoes", "watch"]
api.createOrder(cart, function () {

  api.makePayment(function () {

      api.showSummary(
          function () {
              api.updateWallet()
          }

      )
  })
})

//* inversion of control
// inversion of control is a design principle in which the control of object 
// creation is transferred to a container or framework