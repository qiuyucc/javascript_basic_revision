'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     console.log(firstName);
//     function printAge(){
//         const output = `you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if(birthYear >=1981 && birthYear <=1996){
//             const str = `oh, and you're a millenial, ${firstName}`;
//             console.log(str);
//         }
//     }

//     printAge();
//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

//hoisting

// if(!numProudcts) deleteShoppingCart();
// var numProudcts = 10;

// var x = 1;
// let y = 2;
// const z = 3;

// const addTwoNumber =(a, b) =>{
//     console.log(a+b);
//     return a+b;
// }

// function deleteShoppingCart(){
//      addTwoNumber(2,3);
//     console.log('All proudcts deleted!');
// }

// deleteShoppingCart();
// console.log(x === window.x);

// this -> window object here

// normal function does get its own this keyword, so it's underfined
// const calcAge = function (birthYear) {
//     //console.log(this);
//     return 2037 - birthYear;
// };

// calcAge(1991);

// arrow function doesn't use its own this keyword. 
// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     console.log(this);
//   };
  
//   calcAgeArrow(1991);



// jonas.calcAge();

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();


// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(calcAge(this.year));
//     },

//     greet: ()=> console.log(`Hey ${this.firstName}`),
// }


// jonas.greet();

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Jonas',
//     age: 30,
// }

// const friend = me;
// friend.age = 27;

// console.log(friend.age);
// console.log(me.age);


// primitives dataType: number, string, boolean, undefined, null, symbol, bigInt - 

// Object: Object literal, Arrays, Functions, Many More.. Reference values

// - Prototypal Inheritance
// - Event Loop
// How the DOM Acutally work

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage:', jessica);
console.log('After marriage', marriedJessica);

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push ('Marry');
jessicaCopy.family = ['qiuyu, brook'];

console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

