### **Promise-based APIs in JavaScript**

Many modern JavaScript APIs are designed to work with **Promises** to handle asynchronous operations more efficiently. Here are some commonly used **Promise APIs** in JavaScript:

---

### **1. `fetch()` API**
- The `fetch()` API is used to make HTTP requests (e.g., to retrieve data from a server).
- It returns a **Promise** that resolves with the `Response` object representing the response to the request.

#### **Example:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())  // Convert response to JSON
  .then(data => console.log(data))    // Log the data
  .catch(error => console.log('Error:', error));
```
- The `fetch()` Promise resolves when the response is received.
- If there’s an error, it’s handled by the `.catch()` block.

---

### **2. `setTimeout()`**
- The `setTimeout()` function can be used with **Promises** to perform an asynchronous operation after a certain delay.

#### **Example:**
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log('Executed after 1 second'));
```
- The `delay()` function returns a **Promise** that resolves after the specified delay.

---

### **3. `Promise.resolve()`**
- The `Promise.resolve()` method returns a **Promise** that is resolved with a given value.

#### **Example:**
```javascript
Promise.resolve('Resolved')
  .then(value => console.log(value));  // Output: Resolved
```
- It's used to create a Promise that is already **resolved**.

---

### **4. `Promise.reject()`**
- The `Promise.reject()` method returns a **Promise** that is immediately **rejected** with a given reason.

#### **Example:**
```javascript
Promise.reject('Something went wrong')
  .catch(error => console.log(error));  // Output: Something went wrong
```
- It's used to create a rejected **Promise** right away.

---

### **5. `Promise.all()`**
- `Promise.all()` is used when you want to wait for **multiple Promises** to resolve or reject.
- It returns a **single Promise** that resolves when **all input Promises** are resolved.

#### **Example:**
```javascript
const promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
const promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');

Promise.all([promise1, promise2])
  .then(responses => Promise.all(responses.map(response => response.json())))
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error));
```
- Waits for both requests to finish and processes the responses when both are resolved.

---

### **6. `Promise.allSettled()`**
- `Promise.allSettled()` waits for **all input Promises** to settle, whether they are **resolved** or **rejected**.
- It provides an array with the results of all Promises (either resolved or rejected).

#### **Example:**
```javascript
const promise1 = Promise.resolve('Resolved');
const promise2 = Promise.reject('Rejected');

Promise.allSettled([promise1, promise2])
  .then(results => console.log(results));
// Output: 
// [
//   { status: 'fulfilled', value: 'Resolved' },
//   { status: 'rejected', reason: 'Rejected' }
// ]
```
- Useful when you want to know the outcome of all Promises, regardless of whether they resolved or rejected.

---

### **7. `Promise.race()`**
- `Promise.race()` takes an array of Promises and returns a single **Promise** that resolves or rejects as soon as one of the input Promises resolves or rejects.

#### **Example:**
```javascript
const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'First'));
const promise2 = new Promise(resolve => setTimeout(resolve, 500, 'Second'));

Promise.race([promise1, promise2])
  .then(result => console.log(result));  // Output: Second
```
- The `race()` method resolves or rejects with the result of the **first Promise** to settle.

---

### **8. `Promise.any()`**
- `Promise.any()` takes an array of Promises and returns the first **resolved Promise**. It ignores rejected Promises.

#### **Example:**
```javascript
const promise1 = Promise.reject('Error 1');
const promise2 = Promise.resolve('Success');

Promise.any([promise1, promise2])
  .then(result => console.log(result));  // Output: Success
```
- This method returns the result of the **first successful Promise**, or rejects if all Promises are rejected.

---

### **9. `Promise.finally()`**
- The `finally()` method is used to **run code after a Promise is settled**, regardless of whether it was **fulfilled** or **rejected**.

#### **Example:**
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .catch(error => console.log('Error:', error))
  .finally(() => console.log('Request completed'));  // Always runs
```
- Useful for cleanup or actions that should occur after the Promise settles (e.g., hiding a loading spinner).

---

### **Summary: Common Promise APIs**
1. **`fetch()`**: Used for making HTTP requests.
2. **`setTimeout()`**: Can be wrapped in a Promise to delay code execution.
3. **`Promise.resolve()`**: Creates a resolved Promise.
4. **`Promise.reject()`**: Creates a rejected Promise.
5. **`Promise.all()`**: Waits for all Promises to resolve.
6. **`Promise.allSettled()`**: Waits for all Promises to settle, regardless of resolution or rejection.
7. **`Promise.race()`**: Returns the first Promise to resolve or reject.
8. **`Promise.any()`**: Returns the first resolved Promise, ignoring rejections.
9. **`Promise.finally()`**: Executes code after a Promise is settled.

