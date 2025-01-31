//& also called concurrency model of JavaScript
// setTimeout with 5000ms delay
// it does not always run after 5000ms
//? trust issues with setTimeout

console.log("Start")

setTimeout(function a() {
    console.log("Callback")
}, 5000);
console.log("End")
console.log("End")
console.log("End")
console.log("End")

// code demonstration for setTimeout delay
// it will block your main thread for 10 sec, so even settimeout is set to 0/5000 ms, it will run after 10 sec

let startDate =  new Date().getTime()
let endDate = startDate
while (endDate < startDate + 5000) {
  //as while loop is synchronous, it runs sequentially and blocks the rest of the code execution until it completes
    endDate = new Date().getTime()
    // this code will keep call stack busy for 10 sec
    // and wont allow setTimeout to run
}

console.log("while expires")
// setTimeout, in the callback queue, will run after 10 sec

//! first rule of JavaScript: Do not block the main thread
// javaScrip is synchronous single threaded language