
// function declaration
// function calcAge(birthYear){
//     return 2037 - birthYear;
// }

// const age1 = calcAge(1991);
// console.log(age1);

// // function expression
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }

// // function declaration can be called any where, even before you declared it
// console.log(age1, age2);

// // arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3(1));

// const yearsUntilRetirement = (birthYear, firstname) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstname} retires in ${retirement}`;
// }

// console.log(yearsUntilRetirement (1991, 'Jonas'));




// function fruitProcessor(numberOfApples, numberOfOranges) {

//     const numberOfApplePieces = cutFruitPieces(numberOfApples);
//     const numberOfOrangePieces = cutFruitPieces(numberOfOranges);

//     const juice = `Juice with ${numberOfApplePieces} apples and ${numberOfOrangePieces} oranges.`;
//     return juice;
//   }


// function cutFruitPieces(fruit) {
//     return fruit *4 ;
// }


// console.log(fruitProcessor(2,3));

// const price1 = "20";
// const price2 = 12;
// console.log(price1 + price2);

// function convertNumberToFloat(price){
//     return parseFloat(price).toFixed(2);
// }

// console.log(this.convertNumberToFloat(price1));


// function calcAverage(score1, score2, score3){
//     return (score1 + score2 + score3)/3;
// }

// const checkWinner = function(avgDolphins, avgKoalas){
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//       } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//       } else {
//         console.log('No team wins...');
//       }
// }


// const avgDolphins = calcAverage(44,23,71);
// const avgKoalas = calcAverage(85,54,41);

// checkWinner(avgDolphins, avgKoalas);

//Array

// const friend1 = "brook";
// const friend2 = "kiryu";
// const friend3 = "qiuyu";

// let friends = [ 'steven', 'michael', 'phil'];
// const years = new Array(1991,2001,2020);

// console.log(friends[0]);
// console.log(years[1]);

// friends = ['brook', 'qiuyu'];
// console.log(friends);

// Array exercise

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }  


// const years = [2001,2002,2003,2004];

// years.forEach(x => console.log(`the year is: ${calcAge(x)} \n`));

// const friends = ['brook','dee','lee'];
// const newFriends = friends.push('Jay');

// console.log(friends);
// console.log(newFriends);

// friends.unshift('milk');
// console.log(friends);

// //remove element
// friends.pop(); //last
// const popped = friends.pop().toUpperCase();
// console.log(popped);
// console.log(friends.indexOf('brook'));

// const calcTip = (bill) => {
//     return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.20;
// }

// const array = [125,555,44];
// //const tips = [calcTip(array[0]), calcTip(array[1]), calcTip(array[2])];
// const tips = array.map(x=> calcTip(x));
// console.log(tips);
// let sum = 0;
// const sumOfArray = array.forEach(x=> sum +=x);
// const sumOfAll = tips.forEach(x=> sum+=x);
// console.log(sum);

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

const jonas = {
    firstName:'Jonas',
    lastName:'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael','Peter','Steven'],

    getSummery: function() {
        return this.firstName;
    }
};

//console.log(jonas.firstName);

// const question = prompt('Do you know Jonas?');
// console.log(jonas[question]);

// console.log(jonas.getSummery());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/

const Mark = {
    fullName: 'Mark',
    mass: 78,
    height:1.69,
    
    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const Smith = {
    fullName: 'John',
    mass: 92,
    height:1.95,

    calcBMI: function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
Mark.calcBMI();
Smith.calcBMI();

console.log(Mark.BMI);
console.log(Smith.BMI);

for(let i = 1; i<=10; i ++){
    console.log(`javascript is ${i}`);
}