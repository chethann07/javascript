// To log a message onto a console
// console.log("Hello");

// To create an alert
// window.alert("This is an alert");

// To change the content of html tags
// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "A paragraph";

// Variables
// Declaration let x;
// Assignment x = 100;

// Numbers
// let x = 100;
// let age = 30;
// let price = 10.99;

// console.log(typeof price);
// console.log("The variable x is :" + x);
// console.log(`The age is ${age}`);

// Strings
// let firstName = "David";
// let email = "david@gmail.com";

// console.log(typeof firstName);
// console.log(`The firstName is ${firstName}`);
// console.log(`The email is ${email}`);

// Boolean
// let online = true;

// console.log(typeof online);
// console.log(`Is online : ${online}`);

// To display on the HTML page
// document.getElementById("p1").textContent = `First Name ${firstName}`;
// document.getElementById("p2").textContent = `Email ${email}`;
// document.getElementById("p3").textContent = `Is online :${online}`;

// Arithmetic Operators
// let students = 30;

//Same as students = students + 2;
// Addition
// students += 2;
// Subtraction
// students -= 2;
// Multiplication
// students *= 2;
// Division
// students /= 2;
// Power
// students **= 2;
// Modulus
// students %= 2;

// Increment and decrement
// students++;
// students--;

// console.log(students);

// Precedence
// Paranthesis > Exponents > Multiplication/Division/Modulus > Addition/Subtraction

// let result = ((5 * 10) % 5) / 10 + 2 ** 5 - 1;

// console.log(result);

// User input
// Two ways : 1. Window prompt 2. HTML Form

// let username;
// Window prompt
// username = window.prompt("Enter the username");

// HTML format
// document.getElementById("myBtn").onclick = function () {
//   username = document.getElementById("myInp").value;
//   document.getElementById("myH2").textContent = `Hello ${username}`;
// };

// console.log(username);

// Type conversion

// let yourAge;
// yourAge = window.prompt("Enter age");
// yourAge = Number(yourAge);
// yourAge += 1;
// console.log(yourAge);

// Constants

// const PI = 3.141592;
// let radius;
// let circumference;

// document.getElementById("btn").onclick = function () {
//   radius = parseFloat(document.getElementById("myText").value);
//   circumference = 2 * PI * radius;
//   document.getElementById("result").textContent = circumference;
// };

// Math functions - Math is a javascript object

// let x = 10;
// let y = 20;
// let z;

// z = Math.PI;
// z = Math.floor(Math.PI);
// z = Math.round(Math.PI);
// z = Math.ceil(Math.PI);
// z = Math.sqrt(81);
// z = Math.pow(x, y);
// z = Math.abs(-120);
// z = Math.sign(-123);
// z = Math.max(x, y);
// z = Math.min(x, y);

// console.log(z);

// Random Number Generation

// Random number between 1 to 6
// let random = Math.floor(Math.random() * 6) + 1;

// Random number betweem 50 to 100
// let random2 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

// console.log(random2);
