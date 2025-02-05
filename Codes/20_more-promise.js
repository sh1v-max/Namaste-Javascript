//Consuming Promise
const cart = ["Shoes", "Watches", "Flags"]

createOrder(cart)//return orderId
    .then(function (orderId) {
        console.log(orderId)
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })//Handling error and displaying normally in console 