// let arr = new Array(-3);
// console.log(arr[-1]);
// // RangeError: Invalid array length


// let now = new Date();
// console.log(now.getUTCFullYear());
// // 2025

// let info = new Date('2025-02-30');
// console.log(info.getDate());
// // 2
// let info1 = new Date('2024-02-30');
// console.log(info1.getDate());
// // 1

// let now = new Date();
// now.setDate("30");
// now.setMonth("3");
// now.setFullYear("2024");
// console.log(now.toLocaleDateString());
// console.log(now);
// console.log(now.toString());


(function hello() {
    console.log("hi");
})();


let doLogic = function helloUser(){
    console.log("Hello User");
}
doLogic();
// helloUser(); //ReferenceError: helloUser is not defined