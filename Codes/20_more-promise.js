//* promise APIs
//  Promises APIs are crucial for interviews and everyday application development, 
// especially when handling asynchronous operations like parallel API calls.
//? promise.all
// Promise.all handles multiple promises simultaneously, returning an array of results when all 
// promises are fulfilled, and throwing an error if any promise fails.
// Promise.all returns an array of all results when all promises succeed, 
// waiting for all to finish.
// If any promise in Promise.all fails, the entire operation fails, 
// and an error is thrown immediately without waiting for other promises.
//~ return an array of results when all promises are fulfilled

//? promise.allSettled
// Promise.allSettled waits for all promises to settle (whether fulfilled or rejected) 
// before returning an array of results or errors, making it suitable for scenarios where partial 
// failures are acceptable.
// Promise.allSettled waits for all promises to settle (succeed or fail) 
// before returning results, ensuring all promises are accounted for.
//~ return an array of results or errors when all promises are settled

//? promise.race
// Promise.race returns the result of the first settled promise, whether it's success or failure, 
// making it ideal for scenarios where the fastest response is required.
// Promise.race returns the result of the first settled promise, whether 
// success or failure, racing to return the fastest result.
// Promise status can be checked for rejection along with the reason for 
// rejection, providing clarity in handling errors.
// Promise.race returns the result of the first settled promise, 
// whether it's a success or failure, regardless of the order in which promises are fulfilled.
// Explaining concepts in interviews requires not only understanding but also the ability 
// to articulate ideas clearly, which is often a stumbling block for many candidates
// Promise.race resolves to the value/error of the first settled promise, regardless 
// of success or failure, emphasizing the importance of understanding terminology in the Promise world.
//~ return the result of the first settled promise

//? promise.any
// Promise.any is similar to Promise.race but waits for the first successful promise 
// rather than the first settled one, making it suitable for scenarios where success is prioritized over speed.
// Promise.any returns the result of the first successful promise and ignores subsequent failures, waiting for success.
// Promise.any collects errors if all promises fail and returns an aggregated error array.
// Familiarity with Promise terminology like "settled," "resolved," "rejected,"
// "fulfilled," and "rejected" is crucial for effectively working with Promise APIs.
// Promise.any waits for the first settled promise, and if it's a success, 
// returns the result, ignoring subsequent rejections until a success occurs.
// When all promises fail with Promise.any, it results in an "aggregate error," 
// which consolidates all the errors encountered during execution.
// Handling aggregate errors in Promise.any involves accessing the errors in an 
// array format, allowing for comprehensive error management and analysis.
//~ return the result of the first successful promise

//Consuming Promise
const cart = ["Shoes", "Watches", "Flags"]

createOrder(cart)//return orderId
    .then(function (orderId) {
        console.log(orderId)
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })//Handling error and displaying normally in console 


    //Creating a promise
//Producer side code
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
      //validateCart
      if (!validateCart(cart)) {
          const err = new Error("Cart is not valid")
          reject(err);
      }
      //CreateOrder
      const orderId = "12345";
      if (orderId) {
          setTimeout(function () {
              resolve(orderId);
          }, 2000)
      }
  });
  return pr;
}
function proceedToPayment() {
  return new Promise(function (resolve, reject) {
      resolve("Payment Successful")
  })
}
function validateCart(cart) {
  // return true;
   return false;
// It will throw an error.//Card is not valid
}
