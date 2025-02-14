//* usually, global execution context is created first and then the function execution context is created
// but in case of async function, the function execution context is created first and then the global execution context is created
// and in case of setTimeout, the callback function is pushed to the callback queue and then the global execution context is created
// settimeout with 0ms will still goes to the callback queue and then to the call stack
//? and it's controlled by event loop
//? what event lope does is, it checks the call stack and if it's empty then it pushes the callback function to the call stack
//! every code execute in the call stack via web APIs

//Event loops
//Browser functionality 
//DOM APIs
//settimeout
//console
//fetch()

console.log("Start")
setTimeout(function cb() {
    console.log("Callback")
}, 5000);
console.log("End")

//Example
console.log("Start")
document.getElementById("clickMe")
    .addEventListener("click", function cb() {  //addeventlistener is the another power given by rhe browser to the engine
        console.log("CallBack");
    });
console.log("End");

//Example using fetch
//Example
console.log("Start")
setTimeout(function cbT() {
    console.log(" cb setTimeout")
}, 5000);
fetch("https://api.netflix.com")
    .then(function cbF() {
        console.log("cb Netflix")
    })

console.log("End")
// in the above example, the setTimeout function will go to the callback queue and then to the call stack
// the fetch part with cbF function, after it get resolve will go to the microtask queue
// and not in the callback queue and then to the call stack
//? that's the different behavior of the fetch function

//& let summarize all the component
// call stack - where the code execute
// web APIs - where the async code execute
// callback queue - where the callback function goes
// microtask queue - all the callback function which comes through promises and mutation observer goes in the microtask queue
// event loop - which checks the call stack and push the callback function to the call stack


//! microtask queue - all the callback function which comes through promises and mutation observer goes in the microtask queue

//* STARVATION
// google about it more