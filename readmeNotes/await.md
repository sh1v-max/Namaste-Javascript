# **`await p` returns the resolved value of the Promise `p`.**  

When you use `await p`, it **waits** for the Promise `p` to resolve and then returns the resolved value, just like a synchronous function would return a value.  

### **Example:**
```js
function getData() {
    return new Promise(resolve => setTimeout(() => resolve("Resolved Data"), 2000));
}

async function fetchData() {
    let result = await getData(); // "result" stores the resolved value of the Promise
    console.log(result);
}

fetchData();
```
🔹 **Output (after 2 seconds):**
```
Resolved Data
```
Here, `await getData()` **returns the resolved value** `"Resolved Data"` and stores it in `result`.

---

### **Does `await` just store the value?**
No, `await` **doesn't just store** the value; it actually **pauses execution** until the Promise resolves and then returns its resolved value.

Would you like a deeper explanation with memory behavior? 🚀