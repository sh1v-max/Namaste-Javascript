//* what is async?
// it's a keyword use before function to make it an async function
// async functions always return a promise
// if the return value of an async function is not a promise, javascript automatically wraps it in a promise

const p = new Promise((resolve, reject) => {
  resolve("already a promise")
})

async function getDate() {
  // return "wazir" // this will be wrapped in a promise
  return p // returning a promise
}

const dataPromise = getDate()
console.log(dataPromise) // Promise { 'wazir' }
// how to get the data from promise
dataPromise.then(res => console.log(res)) // wazir


//* what is await?

//* how async and await work behind the scene?

//* examples of using async/await

//* error handling

//* interviews questions

//* async/await vs promise (promise.then/.catch)