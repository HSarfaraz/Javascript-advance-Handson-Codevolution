/*
course content:
00:00 Intro
00:26 Before we begin
01:58 Concepts covered
02:49 Setup
03:29 Nested function scope
08:24 Closure
16:12 Currying
22:35 this keyword
32:15 Prototype
36:28 Prototypal inheritance
42:16 Class
47:08 Iterables and iterators
57:11 Generators
01:03:20 Frontend Interview Course
*/

//lexical scoping: how variable resolves variables names,
//when js functions are nested. js variable searches the inner most then outmost scope
// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

//Closure:
//Defination: A closure is the combination of function bundled together with the references to its surrounding state.
//closures are created every time a function is created, at function creation time.

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();

//Function Currying
//Defination: It is a process in functional programming in which we transform a function with multiple
//arguments into a sequence of nesting functions that take one argument at a time.
//we accepts instead of 3 arguments to 1 arguments at a time

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(2, 3, 5));

// function curry(fn) {
//   return function (a) {
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       };
//     };
//   };
// }
// const curriedSum = curry(sum);
// console.log(curriedSum(2)(3)(5));

// const add2 = curriedSum(2);
// const add3 = add2(3);
// const add4 = add3(5);
// console.log(add5);

//this
// function sayMyName(name) {
//   console.log(`My Name is ${name}`);
// }

// sayMyName("Sarfaraz Hussain");
// sayMyName("Kamran Hussain");

//implicit binding

// const person = {
//   name: "Sarfaraz",
//   sayMyName: function () {
//     console.log(`My Name is ${this.name}`);
//   },
// };

// person.sayMyName();

// function sayMyName() {
//   console.log(`My Name is ${this.name}`);
// }
//explicit binding
// sayMyName.call(person);

//Constructor function
// function Person(name) {
//   this.name = name;
// }

// const p1 = new Person("Sarfaraz");
// const p2 = new Person("Kamran");

// console.log(p1.name, p2.name);

//Prototype

// function Person(fName, lName) {
//   this.firstName = fName;
//   this.lastName = lName;
// }

// //const person1 = new Person("Sarfaraz", "Hussain"); //object with new keyword is called, constructor function
// //const person2 = new Person("Kamran", "Hussain");

// //only 1 time function is created but available with every instance of function
// Person.prototype.getFullName = function () {
//   return this.lastName + " " + this.lastName;
// };

// // console.log(person1.getFullName());
// // console.log(person2.getFullName());

// //In Javascript, inheritance is supported with the help of prototype, called prototypal inheritance
// function SuperHero(fName, lName) {
//   //this={} created automatically
//   Person.call(this, fName, lName);
//   this.isSuperHero = true;
// }

// SuperHero.prototype.fightCrime = function () {
//   console.log("Fighting crime");
// };

// SuperHero.prototype = Object.create(Person.prototype);

// const batman = new SuperHero();
// console.log(batman.getFullName());
// SuperHero.prototype.constructor = SuperHero;

//Class
// class Person {
//   constructor(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
//   }

//   sayMyName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const classP1 = new Person("Sarfaraz", "Hussain");
// console.log(classP1.sayMyName());

// class Person {
//   constructor(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
//   }
//   sayMyName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const classP1 = new Person("Sarfaraz", "Hussain");
// console.log(classP1.sayMyName());

// class SuperHero extends Person {
//   constructor(fName, lName) {
//     super(fName, lName);
//     this.isSuperHero = true;
//   }
//   fightCrime() {
//     console.log("Fighting crime");
//   }
// }

// const batman = new SuperHero("Sarfaraz", "Hussain");
// console.log(batman.sayMyName());

//Iterables and Iterators
//Created own iterable
// const obj = {
//   [Symbol.iterator]: function () {
//     let step = 0;
//     const iterator = {
//       next: function () {
//         step++;
//         if (step === 1) {
//           return { value: "Hello", done: false };
//         } else if (step === 2) {
//           return { value: "World", done: false };
//         } else {
//           return { value: undefined, done: true };
//         }
//       },
//     };
//     return iterator;
//   },
// };

// for (const word of obj) {
//   console.log(word);
// }

//Generator function
//it can stop mid way and continue, means it pause the execution
//here yields means return a value
//generatorObject create internally iterator object for us, so us it in for loop
function normalFunction() {
  console.log("Hello");
  console.log("World");
}
normalFunction();

function* generatorFunction() {
  yield "Hello";
  yield "World";
}

const generatorObject = generatorFunction();
for (const word of generatorObject) {
  console.log(word);
}
