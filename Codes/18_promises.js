//* promise
//& it represents the eventual completion (or failure) of an asynchronous operation
// is an object that may produce a single value some time in the future
// it allows you to handle asynchronous code in a cleaner way

//? other definitions
// promise object is a placeholder for the certain period of time
// until we get the result from the async operation

//? uses
// avoiding callback hell (make async code easier to read)
// handling async operations (api calls, setTimeout, file reading)
// better error handling (can use .catch())

const promiseOne = new Promise(function(resolve, reject){
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function(){
      console.log('Async task is complete');
      resolve()
  }, 1000)
})

promiseOne.then(function(){
  console.log("Promise consumed");
})

// example 2
new Promise(function(resolve, reject){
  setTimeout(function(){
      console.log("Async task 2");
      resolve()
  }, 1000)

}).then(function(){
  console.log("Async 2 resolved");
})

// example 3
const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
      resolve({username: "wazir", email: "hello@example.com"})
  }, 1000)
})

promiseThree.then(function(user){
  console.log(user);
})

// example 4
const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error = true
      if (!error) {
          resolve({username: "wazir", password: "123"})
      } else {
          reject('ERROR: Something went wrong')
      }
  }, 1000)
})

promiseFour
.then((user) => {
  console.log(user);
  return user.username
}).then((username) => {
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


// example 5
const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error = true
      if (!error) {
          resolve({username: "javascript", password: "123"})
      } else {
          reject('ERROR: JS went wrong')
      }
  }, 1000)
});

async function consumePromiseFive(){
  try {
      const response = await promiseFive
      console.log(response);
  } catch (error) {
      console.log(error);
  }
}

consumePromiseFive()


// example 6, with async await

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// withe fetch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// other example
// without promise
const cart2 = ["Shoes", "Watches", "Flags"]

const orderId2 = createOrder(cart2);
proceedToPayment(orderId2);

createOrder(cart2, function (orderId2) {
    proceedToPayment(orderId2, function (paymentInf) {
        showOrderSummary(paymentInf, function () {
            updateWalletBalance()
        })
    })
});

// same with promise
createOrder(cart2).then(function (orderId2) {
  return proceedToPayment(orderId2);
})
  .then(function (paymentInf) {
      return showOrderSummary(paymentInf)
  })
  .then(function () {
      return updateWalletBalance();
  })
