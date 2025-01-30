// setTimeout with 5000ms delay
// it does not always run after 5000ms
//? trust issues with setTimeout

console.log("Start")

setTimeout(function a() {
    console.log("Callback")
}, 5000);
console.log("End")