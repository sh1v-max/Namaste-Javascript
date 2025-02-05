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

//* Notes
//  Promises APIs are crucial for interviews and everyday application development, especially when handling asynchronous operations like parallel API calls.
//  Promise.all handles multiple promises simultaneously, returning an array of results when all promises are fulfilled, and throwing an error if any promise fails.
//  If any promise in Promise.all fails, the entire operation fails, and an error is thrown immediately without waiting for other promises.
//  Promise.allSettled waits for all promises to settle (whether fulfilled or rejected) before returning an array of results or errors, making it suitable for scenarios where partial failures are acceptable.
//  Promise.race returns the result of the first settled promise, whether it's success or failure, making it ideal for scenarios where the fastest response is required.
//  Promise.any is similar to Promise.race but waits for the first successful promise rather than the first settled one, making it suitable for scenarios where success is prioritized over speed.
//  Promise.any returns the result of the first successful promise and ignores subsequent failures, waiting for success.
//  Promise.any collects errors if all promises fail and returns an aggregated error array.
//  Promise.all returns an array of all results when all promises succeed, waiting for all to finish.
//  Promise.allSettled waits for all promises to settle (succeed or fail) before returning results, ensuring all promises are accounted for.
//  Promise.race returns the result of the first settled promise, whether success or failure, racing to return the fastest result.
//  