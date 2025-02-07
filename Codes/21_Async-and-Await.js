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
// console.log(dataPromise) // Promise { 'wazir' }
// how to get the data from promise
// dataPromise.then(res => console.log(res)) // wazir


//* what is await?
//? async and await, together used to handle promises in a more readable and synchronous way
// handling promises without async/await
const p1 = new Promise((resolve, reject) => {
  resolve("promise resolved")
})

function getDate1(){
  p1.then(res => console.log(res))
}
getDate1() // promise resolved
// we were using .then to get the data from promise
// now, with async/await
async function handlePromise(){
  const data = await p1
  console.log(data)
}
handlePromise() // promise resolved

//* how async and await work behind the scene?

//* examples of using async/await

//* error handling

//* interviews questions

//* async/await vs promise (promise.then/.catch)