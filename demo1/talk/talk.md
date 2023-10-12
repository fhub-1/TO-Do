# Project Introduction

JavaScript is a versatile programming language commonly used for web development. It runs in web browsers and allows you to create interactive and dynamic web applications. In this Markdown document, we'll explore 20 essential concepts in JavaScript along with code snippets.


https://aws.amazon.com/what-is/javascript/

## Table of Contents

1. [Variables](#1-variables)
2. [Data Types](#2-data-types)
3. [Comments](#3-comments)
4. [Conditional Statements](#4-conditional-statements)
5. [Loops](#5-loops)
6. [Functions](#6-functions)
7. [Arrays](#7-arrays)
8. [Objects](#8-objects)
9. [DOM Manipulation](#9-dom-manipulation)
10. [Event Handling](#10-event-handling)
11. [Callback Functions](#11-callback-functions)
12. [Asynchronous Programming (Promises)](#12-asynchronous-programming-promises)
13. [Error Handling (try...catch)](#13-error-handling-trycatch)
14. [Arrow Functions](#14-arrow-functions)
15. [Template Literals](#15-template-literals)
16. [Closures](#16-closures)
17. [Classes](#17-classes)
18. [Modules (ES6)](#18-modules-es6)
19. [Map and Reduce](#19-map-and-reduce)
20. [Promises (async/await)](#20-promises-asyncawait)

## 1. Variables

In JavaScript, you declare a variable using one of three keywords: var, let, or const. These keywords define the scope and behavior of the variable. For modern JavaScript development, it's recommended to use let and const because they provide block-level scope, which is more predictable and less error-prone.

```javascript
let age; // Declaration of a variable named 'age'
```

Assignment: You can assign a value to a variable using the assignment operator (=).

```javascript
let age = 30; // Assigning the value 30 to the 'age' variable
```

`Variable Names`: also called identifiers, should follow specific rules:

- `Must` start with a letter, underscore (\_), or dollar sign ($).

- Can contain `letters`, `numbers`, `underscores`, and `dollar signs`.

- Are case-sensitive (`myVar` is different from `myvar`).
  Should use descriptive names to make code more readable (e.g., `userName instead of u`).

# Data Types:

JavaScript is dynamically typed, meaning you don't have to specify the data type of a variable explicitly. JavaScript determines the data type based on the assigned value. Common data types include numbers, strings, booleans, objects, arrays, and more.

```javascript
let name = "John"; // A string
let age = 30; // A number
let isAdmin = true; // A boolean
```

`Variable Reassignment:` You can change the value of a variable by assigning it a new value.

```javascript
let count = 5;
count = 10; // Reassigning 'count' to 10
```

<br/>

# Variable Scope:

Variables in JavaScript have either `function scope` or `block scope`, depending on how they are declared. Variables declared with var have function scope, while those declared with let and const have block scope. Block scope means that the variable is only accessible within the block of code where it's declared.

```javascript
function example() {
  var x = 10; // 'x' is function-scoped
  if (true) {
    let y = 20; // 'y' is block-scoped
    console.log(x); // Accessible
  }
  console.log(y); // Not accessible (ReferenceError)
}
```
