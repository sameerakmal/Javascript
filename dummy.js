// function* generateValues(){
//     yield "sachin";
//     yield "saurav";
//     yield "shashu";
//     yield "jumma";
// }

// let gen = generateValues();
// console.log(gen);

// let result = gen.next();

// while(!result.done){
//     console.log(result);
//     result = gen.next();
// }


// const radius = [3, 4, 1, 2];

// const area = function(radius){
//     return (Math.PI * radius * radius).toFixed(2);
// }
// const circum = function(radius){
//     return (2 * Math.PI * radius).toFixed(2);
// }
// const diam = function(radius){
//     return (2 * radius);
// }

// //DRY : Don't repeat yourself

// function calculate(radius, logic){
//     let output = [];
//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circum));
// console.log(calculate(radius, diam));

// const radius = [3, 4, 1, 2];

// Array.prototype.calculate = function(logic){
//     let output = [];
    
//     for(let i = 0; i < radius.length; i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }

// console.log(radius.map(radius, area));
// console.log(radius.calculate(radius, area));


class Animal{

}

class Dog extends Animal{

}

let a = new Dog();
console.log(a instanceof Animal); //true
console.log(a instanceof Dog); //true
console.log(a instanceof Object); //true
console.log(a instanceof Array); //false
console.log(a instanceof Date); //false
