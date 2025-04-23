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
