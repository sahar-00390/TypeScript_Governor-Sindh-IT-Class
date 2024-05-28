"use strict";
// console.log("Data Types");
// String Data Types
//console.log('Hi');
//console.log("Hi");
//console.log(`Hi`);
//console.log("1234");
// Number Data Types
//console.log(1234);
//console.log(30000);
//console.log(123456);
// To check the type of any data method: Typeof
// console.log(typeof 'Hello');
// Boolean Data Types
// console.log(true);
// console.log(false);
// for Example
// console.log(4===7);
// console.log(9===9);
// Use Console to print variable in console. 
// soem example of console:
// console.log('hello', 'Ali', 'would you like to go on a walk?');
// console.log('Yes' + 'I' + 'like to go on a walk in evening'); //concatination
// Variables; 
// Variable declaration can be use with 'Var', 'Const' and 'Let'.
// let firstClass = 'introduction';
// const material = 'slides';
// var quantity = 'compilation';
// console.log(firstClass);
// console.log(material);
// console.log(myTopic);
// let whichFruit = 'mangos';
// const packedIn = 'Huge boxes';
// var quantity = 10;
// console.log(whichFruit);
// console.log(packedIn);
// console.log( quantity);
// console.log(typeof whichFruit);
// console.log(typeof packedIn);
// console.log(typeof quantity);
//variable types of annotation:
// let whichFruit:string = 'mangos';
// const packedIn:string = 'Huge boxes';
// var quantity:number = 10;
// let isBoxfill:boolean = true;
// console.log(whichFruit);
// console.log(packedIn);
// console.log(quantity);
// console.log(isBoxfill);
// updation and declaration
// Let
// let importantmessage = 'flower is beautiful'; // declaration
// importantmessage = 'flower color is yellow'; // updation
// console.log(importantmessage);
// // Var
// var myfolder = 'has new files'; // declaration
// myfolder = 'full with extra files '; // updation
// var myfolder = 'files are numerous '; // redeclaration
// console.log(myfolder);
// // Const
// const surveyOn = 'ninth may'  // declaration
// surveyOn = 'ninth may' // updtaion (show error)
// const surveyOn = 'Eight may'  // redeclaration
// console.log(surveyOn);
// block and globel scope
let m = 9;
if (m === 9) {
    let myfolder = 'is open now';
    var newFile = 'is updated now';
    const newBook = 'is launched';
    //console.log(myfolder);
    //console.log(newFile);
    console.log(newBook);
}
//console.log(myfolder); // don't work because out of the block
//console.log(newFile); // in var case it work on both case, because of the Globle scope
//console.log(newBook); // show error because out of the block
