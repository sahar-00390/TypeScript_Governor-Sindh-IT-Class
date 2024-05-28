// Concatination 

let petName = 'Parrot';
let petfood = 'like to eat chillis'
//Concatination 1st way by using 'concat'
let petDetail  = ''.concat(petName,' ').concat(petfood); //Concatination 1st way
console.log(petDetail); //Concatination 1st way

//concatination 2nd way by using 'Comma'
console.log(petName , petfood); //concatination 2nd way

console.log("Perrot" , "like to eat red chilli") // concatination by comma
console.log('Parrot' + 'like to eat red chilli'); // concatination by using plus
console.log('5' + '5'); // concatination by using plus
console.log(5 + 5); // concatination by using plus (Arthimatic)

let class_1 = '30';
let class_2 = '25';
//Concatination 
let Sum  = class_1 + class_2; //Concatination
// console.log( class_1 , class_2 = Sum ); //Concatination
console.log( Sum ); //Concatination

console.log('typescript \nis a programming software'); //--> new line methode for quotation


// Template Literals (Backticks)

let num1 = 40;
let num2 = 70;
let sum = num1 + num2;
// console.log(sum);
console.log(`the total of ${num1} and ${num2} will be ${sum}`); //${num} -> place holder

let fileName = "Typescript";
//console.log(`${fileName} is a programing software`);
console.log(`${fileName} 
is a programing software`);  //-> new line methode for tamplate literal backticks
