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

## 💡 How does JavaScript take control over HTML elements, or in how many ways can we use JavaScript code in an HTML page?

<img src = "img/js3.png">

## ❓ FAQ

### 1️⃣ What is the MIME type for script?

- `<script type='text/javascript'>` — Bulk loading  
  <img src="img/j4.png" alt="text/javascript MIME type">

- `<script type='text/module'>` — Module-based loading (⚡ higher performance)  
  <img src="img/j5.png" alt="text/module MIME type">

---


### 2️⃣ What is the difference between script in `<head>` and `<body>`?

- **Head**: Script is loaded into **browser memory** and later used in the page  
- **Body**: Script is loaded **directly into the page** and is not stored in browser memory

---

### 3️⃣ How does JavaScript convert Static DOM into Dynamic DOM?
- **HTML →** HTML parser → Static DOM(Document Object Model)
- **CSS →** CSS parser → Uses static DOM and changes the style of an element using CSSOM(CSS Object Model).
- **JS →** JavaScript engine → Uses STATIC DOM and converts it into Dynamic DOM using 'events and functions'.

---

### 4️⃣ What is strict mode in JavaScript?

- If we want to prevent JavaScript from using undeclared variables, we use `"strict mode"`.

```html
<script type="text/javascript">
  "use strict";
  a = 10;
  console.log(a); // ❌ Uncaught ReferenceError: a is not defined
</script>
```

--- 

### 5️⃣ How to target JavaScript for Legacy browsers? (Old Version Browsers)

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
### 6️⃣ How to link an external JavaScript file to HTML?
```html
<script src="yourfile.js"></script>
```

---

### 🔍 JavaScript `properties` vs `textContent`
<img src = "img/js6.png">

---


