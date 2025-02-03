//* promise
// it represents the eventual completion (or failure) of an asynchronous operation
// is an object that may produce a single value some time in the future
// it allows you to handle asynchronous code in a cleaner way

//? uses
// avoiding callback hell (make async code easier to read)
// handling async operations (api calls, setTimeout, file reading)
// better error handling (can use .catch())

const promiseOne = new Promise(function(resolve, reject){
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function(){
      console.log('Async task is compelete');
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
      resolve({username: "Chai", email: "chai@example.com"})
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
          resolve({username: "hitesh", password: "123"})
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