//Javascript Playlist (Namastay Javascript):
// Topic we covered in Day 3
// Video 9. What is a Block & Block Scope in Javascript & Shadowing & Illegal Shadowing
// Video 10. Closure in Javascript
// Video 11. SetTimeout + Closure in Javascript
// Video 12. Crazy Interview Question in Javascript?

//Video 9 code starts here

// let b=100;
// console.log(a);
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

//Video 9 code ends here

//Video 10 code starts here

// function outer() {
//   var a = 10;
//   function middle() {
//     var b = 20;
//     // one way of writing closure
//     //  function inner()
//     //  {
//     //      console.log(a);
//     //  }
//     // return inner;

//     function inner2() {
//       console.log(a, b);
//     }
//     inner2();
//   }
//   middle();
//   //or you can do the same thing like this:
// }
// var z = outer();
// console.log(z);

//Video 10 code ends here

//Video 11 code starts here

// function x() {
//   let a = 7;
//   setTimeout(function() {
//     console.log(a);
//   }, 1000);
//   a = 100;
//   console.log("Jhammat");
// }
// x();

// function timer(){

//     // for(let i=1; i<5; i++){              //thisis how you do it with let

//     //     setTimeout(function(){           // as let uses Block scope and create a seperate copy each time
//     //         console.log(i);
//     //     },i*1000);
//     // }

//     for(var i=1; i<5; i++){              //this is how you do it with var
//         function close(x){
//             setTimeout(function(){           // as var uses function scope and create a single copy
//                 console.log(x);
//             },x*1000);
//         }
//         close(i)
//     }
// }

// timer();

//Video 11 code ends here

//Video 12 Code starts here

function outest() {
  var c = 10;
  
  function outer(b) {
    
    let a = 30;
    function inner() {
        var d=24;
      console.log(a, b, c);
      
    }
    return inner;
  }
  return outer;
}
let a=100;

var close = outest()("hello world");


close();
console.log(a);
