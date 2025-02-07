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

//=============================================================
//* promise with async/await
//? async and await, together used to handle promises in a more readable and synchronous way
// handling promises without async/await
const p1 = new Promise((resolve, reject) => {
  resolve("promise resolved")
})

function getDate1(){
  p1.then(res => console.log(res))
}
// getDate1() // promise resolved
// we were using .then to get the data from promise
// now, with async/await
async function handlePromise(){
  const val = await p1 // await will wait for the promise to resolve
  console.log(val)
}
// handlePromise() // promise resolved

//* what is await?
//? await is a keyword that can only be used inside an async function
// "await p", it resolves the promise p and return its value
// await wait for the promise to resolve and then it moves to the next line
//& use await to pause execution until a promise resolves

//=============================================================
//* what makes async/await better than promise.then/.catch?
// promise p2
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 3000);
});

// using promise.then/.catch
function getData2() {
  // JS engine will not wait for promise to be resolved and it will print hello wazir first
  p2.then((res) => console.log(res)); 
  console.log("Hello wazir from promise...");
}

// getData2();
// first, hello wazir will be printed and then promise resolved value after 3 seconds

//? with async/await
async function handlePromise() {
  // JS Engine will wait for promise to resolve.
  const val = await p2;
  console.log("Hello wazir from async/await...");
  console.log(val);
}
// handlePromise(); 
// this time, hello wazir won't be printed immediately but after 3 sec
// code will wait at await for promise to resolve and then will move to next line
//~ and this is the major difference between async/await and promise.then/.catch
// .then/.catch are not blocking, code will not wait for promise to resolve
// async/await are blocking, code will wait for promise to resolve

//? example 2
function delay() {
  return new Promise(resolve => setTimeout(() => resolve("Done"), 20000));
}

async function fetchData() {
  console.log("Fetching...");
  let result = await delay(); // Waits for delay() to resolve
  console.log(result);
  // console.log("Finally, promise resolved");
  // console.log("would you talk to me now, Crescha?");
}

// fetchData(); 
// output:
// Fetching...    ---> immediately
// Done!          ---> after 2 seconds
// Fetching...2   ---> after Done!

//? example 3, with 2 values
// promise p3
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 2000);
});

async function handlePromise2() {
  console.log("Hello wazir...");
  const val = await p3;
  console.log("promise resolved val 1...");
  console.log(val);
  
  const val2 = await p3;
  console.log("promise resolved val 2...");
  console.log(val2);
}
// handlePromise2(); 

// in this case, both the promises will resolve after 2 seconds
// output:
// Hello wazir...            ---> immediately
// promise resolved val 1... ---> after 2 seconds
// resolved                  ---> after 2 seconds
// promise resolved val 2... ---> after resolved
// resolved                  ---> after resolved

//? example 4, with both promises (p2 and p3), simultaneously
// const p2 = new Promise((resolve, reject) => {        //promise p2
//   setTimeout(() => {
//     resolve("resolved");
//   }, 3000);
// });

// const p3 = new Promise((resolve, reject) => {        //promise p3
//   setTimeout(() => {
//     resolve("resolved");
//   }, 2000);
// });

async function handlePromise() {
  console.log("Hi");
  const val = await p2;  // waits for p2 to resolve
  console.log("p2 resolved");
  console.log(val);

  const val2 = await p3;  // waits for p3 to resolve 
  console.log("p3 resolved");
  console.log(val2);
}
// handlePromise();

// output:
// Hi             ---> immediately
// p2 resolved    ---> after 3 seconds
// resolved       ---> after 3 seconds
// p3 resolved    ---> after resolved
// resolved       ---> after resolved

//? lets reverse the execution order
async function handlePromise() {
  console.log("Hi");
  const val = await p3;
  console.log("p3 resolved");
  console.log(val);

  const val2 = await p2;
  console.log("p2 resolved");
  console.log(val2);
}
handlePromise();

// output:
// Hi             ---> immediately
// p3 resolved    ---> after 2 seconds
// resolved       ---> after 2 seconds
// p2 resolved    ---> after 3 seconds
// resolved       ---> after 3 seconds


//* async/await vs promise (promise.then/.catch)

