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

// Functions

// function demo(username, age) {
//   console.log(`Hello ${username} and you are ${age} years old!`);
// }

// demo("Jhon Doe", 38);
// demo("Joe Rogan", 48);

// function isEven(input) {
//   return input % 2 === 0 ? true : false;
// }

// console.log(isEven(10));
// console.log(isEven(19));

// function isValidEmail(email) {
//   return email.includes("@") ? true : false;
// }

// console.log(isValidEmail("Jhondoe@gmail.com"));
// console.log(isValidEmail("Joegmail.com"));

// Scope of a variable

// let x = 10; // global variable

// function demo() {
//   x = 15; //local variable and has first preference
// }

// function demo2() {
//   x = 22;
// }

// demo();
// demo2();
// console.log(x);

// Arrays

// let fruits = ["apple", "orange", "banana", "melon"];

// console.log(fruits);
// fruits[4] = "coconut";
// console.log(fruits);

// fruits.push("mango");
// fruits.push("pomegranate");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// fruits.unshift("chickoo");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// fruits.sort();
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// ... spread operator (for iterable items such as arrays and strings)

// let numbers = [1, 2, 3, 4, 5];

// let maxNum = Math.max(...numbers);
// console.log(maxNum);

// let userName = "Jhon Doe";
// let letters = [...userName].filter((char) => char != " ").join("-");
// console.log(letters);

// let fruits = ["apple", "banana", "mango"];
// let vegetables = ["carrot", "tomato"];
// let items = [...fruits, ...vegetables, "egg", "milk"];
// console.log(items);

// (...rest) parameters allows a function to take multiple inputs and also it bundles together separate elements in an array

// function openFridge(...foods) {
//   console.log(...foods);
// }

// function getFood(...foods) {
//   return foods;
// }

// const food1 = "Pizza";
// const food2 = "Burger";
// const food3 = "Fries";
// const food4 = "Chips";

// openFridge(food1, food2, food3, food4);
// console.log(getFood(food1, food2, food3, food4));

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// console.log(sum(10, 20, 30, 40));

// const fullName = ["Mr.", "Sponge", "Bob", "Square", "Pants"];

// function combineString(...string) {
//   return string.join(" ");
// }

// console.log(combineString(...fullName));

// Callback function -> a function that is passed as an argument to another function

// sayHello(sayGoodbye);

// function sayHello(callback) {
//   console.log("Hello");
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// add(printAdd, 2, 10);

// function add(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function printAdd(result) {
//   document.getElementById("myH1").textContent = result;
// }

// forEach() -> method used to iterate over the elements of an array a specified function(callback) to each element
// array.forEach(callback)
// array, index, element are provided

// let fruits = ["apple", "banana", "orange", "grapes"];
// let numbers = [1, 2, 3, 4, 5, 6];

// fruits.forEach(capitalize);
// fruits.forEach(display);
// numbers.forEach(double);

// function display(element) {
//   console.log(element);
// }

// function double(element, index, array) {
//   array[index] = element * 2;
//   console.log(array[index]);
// }

// function toUpperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }

// function capitalize(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
