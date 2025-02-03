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