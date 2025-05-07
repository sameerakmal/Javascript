# 🟨 JavaScript

#### JavaScript is a lightweight, interpreted, and Just-in-Time (JIT) compiled programming language.

- **Lightweight**: Refers to the memory it occupies and how heavy the application is.
- **Interpreted**: Refers to line-by-line translation.
- **Compiled**: Refers to translating the entire program at once — all lines are translated simultaneously.

<img src = "img/js1.png">

---

## 🌐 Client-Server Architecture

<img src = "img/js2.png">

---

## ⚙️ Compilation Types

### a) 🔄 JIT (Just-in-Time) Compiled

- JIT is the process where JavaScript is loaded into the browser and compiled there.  
  This happens **when the user sends a request**.

### b) 🚀 AOT (Ahead-of-Time) Compiled

- AOT is the process where JavaScript is compiled and processed at the application level —  
  **even before any request is made**.

---

## 🧩 Engines and Compilers

- Some of the engines and compilers that can be used with JavaScript include:
  - **Ivy**
  - **Babel**
  - **Node**
  - **V8**


## 🧠 JavaScript Programming Approaches

- JavaScript supports various programming techniques and approaches:
  - **Structural Programming**
  - **Functional Programming**
  - **Imperative Programming**
  - **Object-Oriented Programming** *(limited)*

> 🔔 **Note:** *JavaScript is not a pure OOP language. It supports only a few features of OOP.*

---

## 🧩 JavaScript Usage in Different Layers

- JavaScript is a `programming language` used at different layers of a project:
  - 📄 **Client Side** — with `HTML`
  - 🌐 **Server Side** — with `Node.js`
  - 🗃️ **Database** — `MongoDB`
  - 🎞️ **Animation Tools** — *Flash*, *3DS Max*, etc.


## 🛠️ Full Stack JavaScript Flow
- **Frontend**
  - `React.js`

- **Backend**
  - `Node.js`
  - `Express.js`

- **Database**
  - `MongoDB (JavaScript based)`

## ❓ FAQ

### 1. What are the issues with JavaScript?

- **JavaScript is not "strongly" typed**
  - Example:
    ```javascript
    a = 10;
    a = "sachin";
    a = false;
    a = 13.5;
    ```
  - No fixed data type is enforced on a variable.

---
- **JavaScript is not "strictly" typed**
  - Example:
    ```javascript
    "use strict";
    a = 10; // Allowed even without declaration
    ```
  - Variables can be used without being declared unless strict mode is enabled.

---

- **JavaScript doesn't restrict uniform data structure**
  - Example:
    ```javascript
    [
      {
        Name: "samsung",
        price: 45000
      },
      {
        Product: "LG",
        cost: 55000
      }
    ]
    ```
  - Object keys and values are not enforced to follow a consistent schema.

---

- **JavaScript is not fully secure**
  - It can be blocked or manipulated by the browser.
  - Susceptible to misuse if used improperly.

  #### Examples:

  | Type  | Tool         | Description                                                |
  |-------|--------------|------------------------------------------------------------|
  | ❌ Bad | `Trojan`     | Installs secretly, allowing device control without consent |
  | ✅ Good | `TeamViewer` | Used for remote access with user permission                |

# 🌐 JavaScript Client Side

- The main purpose of JavaScript on the **client side** is to avoid burdening the server.

- It can **improve application performance** by handling various interactions on the client side.

---

## ⚙️ Interactions at the Client Side

### a. DOM Manipulations

- Adding elements into the page  
- Removing elements from the page  
- Updating data in elements  
- Configuring styles dynamically  
- Attaching events dynamically  

---

### b. Validations

- JavaScript is used to **verify user input** on the client side before sending it to the server.

---

### c. Client-Side Management

- **Managing Client Memory**  
  - e.g., Username and password stored in cache memory

- **Managing Client Devices**  
  - e.g., Booking a ticket and printing it offline (no internet needed)

- **Managing User Location**  
  - e.g., Websites that ask for your location

- **Data Sharing with Other Applications**  
  - e.g., Sharing files or data from the browser with installed apps

### 💡 How does JavaScript take control over HTML elements, or in how many ways can we use JavaScript code in an HTML page?

<img src = "img/js3.png">

### Window Heirarchy
<img src = "img/js7.png">


### ❓ FAQ

- 1️⃣ What is the MIME type for script?

  - `<script type='text/javascript'>` — Bulk loading  
    <img src="img/j4.png" alt="text/javascript MIME type">

  - `<script type='text/module'>` — Module-based loading (⚡ higher performance)  
    <img src="img/j5.png" alt="text/module MIME type">

---

- 2️⃣ What is the difference between script in `<head>` and `<body>`?

  - **Head**: Script is loaded into **browser memory** and later used in the page  
  - **Body**: Script is loaded **directly into the page** and is not stored in browser memory

---

- 3️⃣ How does JavaScript convert Static DOM into Dynamic DOM?
  - **HTML →** HTML parser → Static DOM(Document Object Model)
  - **CSS →** CSS parser → Uses static DOM and changes the style of an element using CSSOM(CSS Object Model).
  - **JS →** JavaScript engine → Uses STATIC DOM and converts it into Dynamic DOM using 'events and functions'.

---

- 4️⃣ What is strict mode in JavaScript?

  - If we want to prevent JavaScript from using undeclared variables, we use `"strict mode"`.

  ```html
  <script type="text/javascript">
    "use strict";
    a = 10;
    console.log(a); // ❌ Uncaught ReferenceError: a is not defined
  </script>
  ```

--- 

- 5️⃣ How to target JavaScript for Legacy browsers? (Old Version Browsers)

  - Developers can target new JavaScript code to legacy browsers by enclosing the code in HTML comments.

  ```html
  <script type="text/javascript">
    <!--
      "use strict";
      // your code here...
    -->
  </script>
  ```
---
- 6️⃣ How to link an external JavaScript file to HTML?
  ```html
  <script src="yourfile.js"></script>
  ```

---

### 🔍 JavaScript `properties` vs `textContent`

<img src = "img/js6.png">

> 💻 Related Code : 
[dom-heirarchy-code.html](javascript-examples/dom-heirarchy-code.html)

---
### ⚠️ Disadvantage of Using DOM Hierarchy for Targeting Elements

- If we target elements using **DOM hierarchy**, the code might **break** when the DOM structure is altered or changed.


- ✅ Solution : Use **ID** to target the element directly and reliably:
  ```javascript
  document.getElementById("myElement");
  ```


### 🆔 Targeting Elements Using ID Selector

- We use the method:
  ```javascript
  const oneElement = document.getElementById('idname');
  ```
- If there are multiple elements with the **same ID**, the method will return only the first matching element.
  ```javascript
  document.getElementById("idname");
  ```

### 🎨 Style Binding to HTML Elements

- To bind a single CSS property to an element:
  ```javascript
  element.style.property = "value";
  ```
- ✅ To set multiple CSS properties in one line:
  ```javascript
  element.style.cssText = "cssKey1: value1; cssKey2: value2;";

  element.style.cssText = "color: blue; background-color: yellow;";
  ```

> 💻 Related Code : 
[multiple-id-code.html](javascript-examples/multiple-id-code.html)




### Various Types of Accessing Elements 🛠️
---
- 1️⃣ Accessing by Class Name 🏷️

  - `document.getElementsByClassName()` returns an **HTMLCollection[]**.

  - To convert an **HTMLCollection** to an **Array**, use:
    ```javascript
    const arrayElements = Array.from(htmlCollection);
    ```
  > 💻 Related Code : 
  [using-class-names](javascript-examples/using-class-names.html)

- 2️⃣ **Accessing by Tag Name 🏷️**  
  - `document.getElementsByTagName()` returns an **HTMLCollection[]**.  
  - Another approach to convert **HTMLCollection** to an **Array**:

    ```javascript
    const arrayElements = [...htmlCollection];
    ```
  > 💻 Related Code : 
  [using-tag-names](javascript-examples/using-tag-name.html)

- 3️⃣ **Accessing by Name 🏷️**  
  - `document.getElementsByName()` returns a **NodeList**.  
  - While working with **NodeList**, you can directly use **`forEach()`** without any conversion.
  > 💻 Related Code : 
  [using-name](javascript-examples/using-name.html)

> 🔔 **Note:** *Instead of remembering all these methods, you can use a method called*  
> `querySelector(cssSelector)` | `querySelectorAll(cssSelector)`  
> *to target the elements in an HTML page.*
> 
> - `querySelector(cssSelector)` returns an **Element** 🔍  
> - `querySelectorAll(cssSelector)` returns a **NodeList** 📑
> > 💻 Related Code : 
  [query-selector](javascript-examples/query-selector.html)

### 🔄 Working with Iterator: `forEach`
- `forEach` can be used **only on Array objects**.

  ```javascript
  const callbackFunction = (value, index, arr) => {
    // value -> current element
    // index -> index of the current element
    // arr   -> the entire array
  };

  // Usage
  array.forEach(callbackFunction);
  ```


### ❓ **FAQ:**  

1. Why do we need so many methods to target HTML elements using JavaScript, when we can target directly with a single method called `querySelectorXXX()`?
  
    - Older versions of JavaScript added methods like  
    `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, etc.  
    As CSS became more popular, to give direct support for accessing elements using CSS selectors,  
    methods like `querySelector()` and `querySelectorAll()` were introduced.

      - `querySelector` | `querySelectorAll` | `getElementById` ➡️ works only for **static DOM**  
      - `getElementsByClassName()` | `getElementsByTagName()` | `getElementsByName()` ➡️ works with **dynamic DOM** 
    


  
### Static vs. Dynamic DOM Access — What’s the difference? 🔄
---
#### Static DOM Access ⚡
- Happens once, at the time of accessing.
- If DOM elements change later, the reference **does not update**.
- Example: `querySelectorAll()` returns a **NodeList**, which is **static**.

---

#### Dynamic (Live) DOM Access 🔄
- Reflects changes **automatically**.
- If new elements are added or removed, the collection **updates itself**.
- Example: `getElementsByClassName()` returns an **HTMLCollection**, which is **live**.
---
> 💻 Related Code : 
  [static-dynamic-dom](javascript-examples/static-dynamic-dom.html)


### JavaScript Output Operations 💬

- 1️⃣ **`alert()`** 🚨  
- 2️⃣ **`confirm()`** ✅❌  
- 3️⃣ **`document.write()` | `document.writeln()`** 📝  
- 4️⃣ **`innerHTML` | `outerHTML`** 🔄  
- 5️⃣ **`innerText` | `outerText`** 📝  
- 6️⃣ **`textContent`** 🖋️  
- 7️⃣ **`console.XXXXX()`** [log(), warn(), error(), info(), debug()] 🖥️


---

#### 1️⃣ `alert(msg)` 🚨: `void`
- Displays a message with an "OK" button.
- Returns `undefined` when the user clicks "OK" or presses the "ESC" key.
- Primarily used to display messages.

##### Limitation 🚫
- ❌ No styling can be added to the message.
- ❌ No "Cancel" button, so the user must click "ESC" to exit.

---

#### 2️⃣ `confirm(msg)` ✅❌: `boolean`
- Displays a message with "OK" and "Cancel" buttons.
- Returns `true` when the user clicks "OK" and `false` when the user clicks "Cancel".

##### Limitation 🚫
- ❌ No styling can be added to the message.

> 💻 Related Code : 
  [confirm-code.html](javascript-output-techniques\confirm-code.html)
---
#### 3️⃣ `document.write(msg)` 📝

- Accepts `msg` as a **string** or **HTML elements**.
- Directly writes content into the HTML document.

---

##### Limitation 🚫
- `document.write()` can behave **unexpectedly** if used **after** the page has finished loading — it can overwrite the entire document.


##### ⚙️ Output Behavior of `document.write()`

###### 🔍 What Happens When You Click the Button?

- 🧨 The entire existing page (including the button, heading, etc.) gets **wiped out**.
- Only the content inside `document.write(...)` is displayed.

###### ❓ Why Does This Happen?

- After the page finishes loading, `document.write()` acts like:
  > "Let me 🧹 rebuild the entire document from scratch now!"

> 💻 Related Code : 
  [document-write-code.html](javascript-output-techniques/document-write-code.html)
---
#### 4️⃣ `innerHTML` vs `outerHTML` 🧱

- **`innerHTML`**: Adds the element as a **child** to the targeted container or element. 👶  
- **`outerHTML`**: **Replaces** the entire targeted element with the newly provided one. 🔁

> 💻 Related Code : 
  [innerHtml-vs-outerHtml.html](javascript-output-techniques/innerHtml-vs-outerHtml.html)
---
#### 5️⃣  `innerText` vs `outerText` ✍️

- Works like `innerHTML` and `outerHTML` ✅  
- But only for **text content** — no HTML or styles allowed 🛑
> 💻 Related Code : 
  [innerText-vs-outerText.html](javascript-output-techniques/innerText-vs-outerText.html)
---

#### 6️⃣ `textContent` 🖋️

- Used to get or set the **text content** of an element.
- Returns all the text within an element, **including text from hidden elements**.
- Does **not parse HTML**—purely works with plain text.
- Ideal when you're working with content programmatically and **don't need styling awareness**.
---

##### 📌 Difference: `innerText` vs `textContent`

- **`textContent`**  
  ✔️ Returns **all text**, including from **hidden elements**  
  ✔️ **Faster** and better for **raw text**  
  ✔️ Ignores CSS layout and visibility  

- **`innerText`**  
  ✔️ Returns only **visible text**  
  ✔️ Respects **CSS visibility** and **layout**  
  ✔️ Includes **line breaks and spacing** as shown on screen  

> ⚠️ Use `textContent` for performance.  
> 🎯 Use `innerText` for accurate, visible representation.

---
#### 7️⃣🧾 Logs

- Logs refer to the **actions performed by the end user**.  
To **track user behavior or activity**, we use logs in JavaScript (commonly via `console.log()` or other logging tools).

<img src = "img/js8.png">

> 💻 Related Code : 
  [console-log.html](javascript-output-techniques/console-log.html)
---

### JavaScript Input Mechanism ✍️

- 1️⃣ **`prompt()`** 💬  
- 2️⃣ **`queryString`** 🔗  
- 3️⃣ **`formelements`** 📝

#### 1️⃣ `prompt()` 📥


- 🧾 **Return Type:** `string` (or `null`)

  ```javascript
  prompt("MSG", [default msg]);
  ```

##### 🧪 **Behavior:**

- ✅ If user enters data and clicks OK → `'data'` (string)
- ⚠️ If user doesn’t enter anything but clicks OK → `''` (empty string)
- ❌ If user clicks Cancel or presses ESC (with or without entering data) → `null`

<img src = "img/js9.png" width = "300">


> 💻 Related Code : 
  [prompt-code.html](javascript-input-techniques/prompt-code.html)


#### 2️⃣ `queryString` 🔗

- A combination of **URL + queryParameters (Key, Value)**  
- To collect the query string, we use the **BOM (Browser Object Model)**:

  ```javascript
  const queryString = location.search;
  ```
- Query string data is received as a string
- You can use string methods to process it:
  - slice(start)
  - indexOf('')
> 💻 Related Code : 
  [query-string-code.html](javascript-input-techniques/query-string-code.html)

--- 
## 🌐 Global Execution Context

### 🚀 How JavaScript Program is Executed (or How JavaScript Runs in the Browser)

- When JavaScript is loaded into the browser's engine, it forms an **Execution Engine** ⚙️

- Inside the **Execution Context**, there are two main areas:

  - 🧠 **Memory (Variable Environment)** – stores variables and function declarations  
  - 🔁 **Code Execution (Thread of Execution)** – executes code line by line
---

### 🖥️ JavaScript in Browser Engine  

<img src = "img/js10.png">

---

### 📦 Execution Context Stack
* First, a **Global Execution Context (GEC)** is created automatically 🌐  
  Then, whenever a function is invoked, a **new Execution Context** is created and pushed onto the **Call Stack**, as shown below:

<img src = "img/js11.png">

---

#### 📝 Additional Points:

* JavaScript is **synchronous and single-threaded** 🧵 — it can only execute one command at a time in a specific order.

* The **Call Stack** 📚 keeps track of execution contexts — the one on top is always the currently running context.

* The **Execution Context** is created in two phases:
  1. 🔍 **Memory Creation Phase** – variables and functions are stored in memory (hoisted).
  2. ▶️ **Code Execution Phase** – code runs line by line using the stored memory.


#### ⚓ Hoisting

- Hoisting is a phenomenon in JavaScript where **variables and functions can be used before they are initialized**.
- If a `var` variable holds a **function expression** or an **arrow function**, it **cannot** be used before initialization.
- Trying to do so will result in a **`TypeError`**.

> 🔔 **Note:**  
> ✅ `undefined` is printable.  
> ❌ `null` and `void` are not printable as meaningful output.

<img src = "img\js13.png">

> 💻 Related Code : 
  [hoisting.html](global-context/hoisting.html)
### 🔍 Lexical Environment & Scope Chain

- **Lexical Environment** 🧠  
  Memory of its own container + memory of its parent container

- **Scope Chain** 🔗  
  Refers to the chain of lexical environments used to identify the variable or function to access

<img src = "img\js12.png">

> 💻 Related Code : 
  [variable-overriding.html](global-context/variable-overriding.html)

> [window.html](global-context/window.html)

### 🧠 `var` vs `let` vs `const`

#### 🟡 `var`
- ✅ Supports **hoisting** (initialized as `undefined`)
- 🔁 **Redeclaration** is allowed
- 🔄 **Reassignment** is allowed
- 📦 Function-scoped
- 🧥 Supports **shadowing**

---

#### 🔵 `let`
- ⚠️ Supports **hoisting**, but in **Temporal Dead Zone (TDZ)**  
-  ❌ Cannot be accessed before initialization  
- 🧨 Throws `ReferenceError`
- 🚫 Redeclaration is **not allowed**
- 🔄 **Reassignment** is allowed
- 📦 Block-scoped
- 🧥 Supports **shadowing**

---

#### 🔴 `const`
- ⚠️ Supports **hoisting**, but in **Temporal Dead Zone (TDZ)**  
- ❌ Cannot be accessed before initialization
- 🚫 **Redeclaration** is not allowed
- 🚫 **Reassignment** is not allowed → ❌ Throws `TypeError`
- 📦 Block-scoped
- 🧥 Supports **shadowing**


### 🔁 Comparison of `var`, `let`, and `const`

| Feature                        | `var`                              | `let`                                   | `const`                                 |
|-------------------------------|-------------------------------------|------------------------------------------|------------------------------------------|
| 🔍 Scope                      | Function-scoped                    | Block-scoped                            | Block-scoped                            |
| 🚀 Hoisting                   | Yes (initialized as `undefined`)   | Yes (but not initialized)         | Yes (but not initialized)         |
| 🔁 Can be Reassigned          | Yes                                | Yes                                     | ❌ No                                    |
| 🔁 Can be Redeclared          | Yes                                | ❌ No                                    | ❌ No                                    |
| ⚠️ Temporal Dead Zone (TDZ)   | ❌ No                               | ✅ Yes                                   | ✅ Yes                                   |
| 🔄 Use in Loops               | ❌ Not safe (due to function scope)                 | ✅ Safe                                  | ✅ Safe (if no reassignment)            |
| Global object property | Yes (if declared globally) | No | No |

### 🧾 Rules to Name a Variable in JavaScript

1. 🔤 Name must start with an alphabet, `_`, or `$`.
2. ⚙️ `_` is often used for configuration or internal constructs.  
   - Example:  
     `var productName;` → Fully implemented  
     `var _productName;` → Not yet implemented
3. ❌ Avoid special characters in variable names (as per ECMAScript standards).
4. 🔡 Names can be alphanumeric.  
   - Example: `var product2020;`
5. 🔠 Variable names are **case-sensitive**.
6. 🔢 Name length can be up to **255 characters**.
7. 🧩 Avoid using single-letter or overly long variable names.
8. 🚫 Do not use **reserved keywords** (45 total in JavaScript).
9. 🐪 Always use **camelCase**, and names should describe their purpose.  
   - Bad: `var u = "sachin";`  
   - Good: `var userName = "sachin";`

<img src = "img\js14.png">

> Note : 
> Javascript object = {k : v} convert js object yo JSON : json.stringify()
> JSON Object = {k : v} convert string representation to JSON to js object : JSON.parse()

