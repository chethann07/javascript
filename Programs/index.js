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

// if-else statements

// let age;

// document.getElementById("ageBtn").onclick = function () {
//   age = document.getElementById("myAge").value;
//   if (age > 100) {
//     document.getElementById("ageLabel").textContent =
//       "You are too old to enter";
//   } else if (age >= 18) {
//     document.getElementById("ageLabel").textContent =
//       "You are old enough to drive";
//   } else if (age < 0) {
//     document.getElementById("ageLabel").textContent = "You dont exist!";
//   } else if (age < 18) {
//     document.getElementById("ageLabel").textContent = "You are too young";
//   }

//   document.getElementById("ageDiv").textContent = "";
// };

// Checked property

// const subscribe = document.getElementById("mySub");
// const visa = document.getElementById("visaBtn");
// const masterCard = document.getElementById("masterCardBtn");
// const paypal = document.getElementById("paypalBtn");
// const submitButton = document.getElementById("submitBtn");
// const subP = document.getElementById("subP");
// const card = document.getElementById("cardP");

// submitButton.onclick = function () {
//   if (subscribe.checked) {
//     subP.textContent = `You are subscribed`;
//   } else {
//     subP.textContent = `You are NOT subscribed`;
//   }

//   if (visa.checked) {
//     card.textContent = `You are paying through visa`;
//   } else if (masterCard.checked) {
//     card.textContent = `You are paying through mastercard`;
//   } else if (paypal.checked) {
//     card.textContent = `You are paying through paypal`;
//   } else {
//     card.textContent = `Choose a payment mode`;
//   }
// };

// Ternary Operator

// let isStudent = true;
// let message = isStudent ? "You are a student" : "You are NOT a student";
// console.log(message);

//Switch case

// let score = 65;
// let letterGrade;

// switch (true) {
//   case score >= 80:
//     letterGrade = "A";
//     break;

//   case score >= 70:
//     letterGrade = "B";
//     break;

//   case score >= 60:
//     letterGrade = "C";
//     break;

//   case score >= 50:
//     letterGrade = "D";
//     break;

//   case score >= 40:
//     letterGrade = "E";
//     break;

//   default:
//     letterGrade = "F";
//     break;
// }

// console.log(letterGrade);

// String methods

// let userName = "Jhon Doe";
// let userName = "Jhon Doe Jhon Doe";

// let result = userName.toLowerCase();
// let result = userName.toUpperCase();
// let result = userName.charAt(3);
// let result = userName.indexOf("z");
// let result = userName.lastIndexOf("o");
// let result = userName.length;
// let result = userName.trim();
// let result = userName.startsWith("J");
// let result = userName.repeat(2);
// let result = userName.split(" ");
// let result = userName.replace("Doe", "Smith");
// let result = userName.replaceAll("Doe", "Smith");
// let result = userName.substring(2, 6);
// let result = userName.includes(" ");
// let result = userName.padStart(15, "Jhon Doe");
// let result = userName.padEnd(15, "0");

// console.log(result);

// String slicing

// let email = "jhondoe@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(username + " " + extension);

// Method Chaining

// Input: "   JHOn DOe" OutPut: "Jhon doe"

// let userName = window.prompt("Enter your username");
// userName = userName
//   .trim()
//   .charAt(0)
//   .toUpperCase()
//   .concat(userName.trim().slice(1).toLowerCase());
// console.log(userName);

// Logical Operators

// const temp = -100;

// AND
// if (temp > 0 && temp <= 30) {
//   console.log("The weather is GOOD");
// } else {
//   console.log("The weather is BAD");
// }

// OR
// if (temp <= 0 || temp > 30) {
//   console.log("The weather is BAD");
// } else {
//   console.log("The weather is GOOD");
// }

// NOT
// const isSunny = true;

// if (!isSunny) {
//   console.log("It is not sunny");
// } else {
//   console.log("It is sunny");
// }

// Strict equality

// = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator

// const PI = 3.14;

// if (PI == 3.14) {
//   console.log(`This is Pi`);
// } else {
//   console.log(`That is NOT Pi`);
// }

// if (PI == "3.14") {
//   console.log(`This is Pi`);
// } else {
//   console.log(`That is NOT Pi`);
// }

// if (PI === "3.14") {
//   console.log(`This is Pi`);
// } else {
//   console.log(`That is NOT Pi`);
// }

// While loops

// let username = "";

// while (username === "" || username === null) {
//   username = window.prompt("Enter the username :");
// }

// let username;

// do {
//   username = window.prompt("Enter the username :");
// } while (username === "" || username === null);

// console.log(`Hello ${username}`);

// let loggedIn = false;
// let userName, password;
// while (!loggedIn) {
//   userName = window.prompt("Enter username");
//   password = window.prompt("Enter password");
//   if (userName == "myUsername" && password == "myPassword") {
//     console.log("logged in!");
//     loggedIn = true;
//   } else {
//     console.log("invalid credentials!");
//     loggedIn = false;
//   }
// }

// For loop

// for (let i = 0; i <= 10; i++) {
//   if (i == 3) {
//     continue;
//   } else if (i == 9) {
//     break;
//   } else {
//     console.log(i);
//   }
// }
