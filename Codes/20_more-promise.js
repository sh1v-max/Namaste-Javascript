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

//? promise.all
// example 1
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});

Promise.all([p1, p2, p3]).then((results) => {
  console.log(results); // ['P1 Success', 'P2 Success', 'P3 Success'] -> took 3 secs
});

// example 2
const p11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p22 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 Fail");
  }, 1000);
});
const p33 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P3 Success");
  }, 2000);
});

Promise.all([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err)); // throws error after 1 sec i.e. 'P2 Fails'

//? promise.allSettled
// example 1
const p111 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p222 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 1000);
});
const p333 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.allSettled([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

// Over here, it will wait for all promises to be either settled or rejected and then return,
/*
    [
      {status: 'fulfilled', value: 'P1 Success'},
      {status: 'fulfilled', value: 'P2 Success'},
      {status: 'rejected', reason: 'P3 Fail'}
    ]
  */


//? promise.race
// example 1

const p10 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p20 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 5000);
});
const p30 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.race([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

//After 2 secs O/P: "P3 Fail"

//? promise.any
// example 1

const p01 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 Success");
  }, 3000);
});
const p02 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 5000);
});
const p03 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

//Example 2
const p001 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 Fail");
  }, 3000);
});
const p002 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 Success");
  }, 5000);
});
const p003 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

// After 5 secs: 'P2 Success'
//Example 3
const p1a = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P1 Fail");
  }, 3000);
});
const p2a = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P2 Fail");
  }, 5000);
});
const p3a = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("P3 Fail");
  }, 2000);
});

Promise.any([p1, p2, p3])
  .then((results) => console.log(results))
  .catch((err) => {
    console.error(err);
    console.error(err.errors); // ['P1 Fail', 'P2 Fail', 'P3 Fail']
  });

// Since all are rejected, so it will give "aggregate error" as output
// AggregateError: All promises were rejected
// To get AggregateError array you need to write "err.errors"