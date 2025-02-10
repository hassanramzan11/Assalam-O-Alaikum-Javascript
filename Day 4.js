//Javascript Playlist (Namastay Javascript):
// Topic we covered in Day 4
// Video 13. First Class Functions(Function Statement, Expression, Declartion, Anonymous Function,Named Function Expression, Parameters Vs Arguments,Arrow Function)
// Video 14. Callback Function in Javascript

// Video 13 code starts here

//Funciton Statement aka Function Declaration

// function a(){
//     console.log("I am a function statement");
// }

//Function Expression
// var b= function()
// {
//     console.log("I am a function expression");
// }

//anonymous function

// function b(){
//     console.log("I am a anonymous function");
// }

// //Named Function Expression

// var c= function xyz(params)
// {
//     return function xyz(){

//     }
//     console.log("I am a named function expression");
// }
// c();
// xyz(); //This will give error as xyz is not defined

//Parameters Vs Arguments

//First Class Functions

// Assigning a function to a variable
// const greet = function(name) {
//     return `Hello, ${name}!`;
// };

// // Passing a function as an argument to another function
// function sayHello(greetFunction, name) {
//     console.log(greetFunction(name));
// }

// // Returning a function from another function
// function createGreeting(greeting) {
//     return function(name) {
//         return `${greeting}, ${name}!`;
//     };
// }

//Video 13 code ends here

//Video 14 code starts here

//Callback Function in Javascript

// setTimeout(function() {
//     console.log('Timer');
// },5000);
// function x(y){

//     y();
//     console.log("I am x");
// }
// x(function y(){

//     console.log("I am y");
// });

//Blocking the main thread


//Scope/Closure Demo with a Event Listener
// function attachEventListener() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", function xyz() {
//     console.log("I am clickMe",++count);
//   });
// }
// attachEventListener();


//Video 14 code Ends Here

//Video 15 Starts Here

//Event Loop in Javascript

console.log("Start");
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("I am clickMe");
});

console.log("End");