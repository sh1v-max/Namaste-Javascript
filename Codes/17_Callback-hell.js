// callback are important while writing asynchronous code
// drawback of callback is that it leads to"

//* callback hell
// callback hell is a situation where you have multiple nested callbacks which make the code hard to read and debug

console.log("wazir");

setTimeout(function () {
    console.log("wazir 2");
}, 5000);

console.log("singh")