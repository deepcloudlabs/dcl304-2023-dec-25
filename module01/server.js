// JS Source Code --> JS Engine (VM) -> JIT Compiler, GC
//                    Chrome: v8 -> Nodejs
let x = 42; // number
console.log(typeof (x));
x = "kate austen"; // string
console.log(typeof (x));
x = 2 + 2 === 4; // boolean
console.log(typeof (x));
x = {identity: "1", fullname: "jack shephard", salary: 100_000}; // object
console.log(typeof (x))
x = function () {
} // function
console.log(typeof (x));