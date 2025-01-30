//* every browser has a JavaScript engine or the JRE
//JS run literally everywhere from smart watch to robot to browser
//* because of JavaScript Runtime Environment (JRE)
//JRE is a part of the browser that can execute JavaScript code
// JRE consists of:
// 1. Call Stack
// 2. Web APIs
// 3. Microtask Queue
// 4. Callback Queue
// 5. Event Loop
// ECMAScript is the standard for JavaScript
// JavaScript engines: V8(chrome), SpiderMonkey(firefox), Chakra(edge), JavaScriptCore

// In all languages, code is compiled either with interpreter or with compiler. 
// JS used to have only interpreter in old times, but now has both to compile JS code.

// Interpreter : Takes code and executes line by line. Has no idea what will happen in next line. Very fast.
// Compiler : Code is compiled and an optimized version of same code is formed, and then executed. More efficient

//? Code inside JSE passes through 3 steps : Parsing, Compilation and Execution
// Parsing : Code is converted into Abstract Syntax Tree(AST)
// Compilation : AST is converted into Bytecode
// Execution : Bytecode is executed by the JRE

// v8 of Google has Interpreter called as Ignition, a compiler called Turbo Fan and garbage collector called Orinoco