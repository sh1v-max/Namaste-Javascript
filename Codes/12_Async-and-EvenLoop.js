//* usually, global execution context is created first and then the function execution context is created
// but in case of async function, the function execution context is created first and then the global execution context is created
// and in case of setTimeout, the callback function is pushed to the callback queue and then the global execution context is created
//? and it's controlled by event loop

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