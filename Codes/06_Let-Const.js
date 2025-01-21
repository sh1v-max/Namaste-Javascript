// temporal dead zone?
//^ temporal dead zone is a time between the entering of the scope and the actual declaration of the variable
// let and const too do follow hoisting but they're not initialized with undefined, and they're in temporal dead zone
// whe you try to initialize a variable when they're in temporal dead zone
//: you will get a reference error
// they can only be accessible after some value is initialized to them
