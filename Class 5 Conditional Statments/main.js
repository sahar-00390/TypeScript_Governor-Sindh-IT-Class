"use strict";
// coditional statements (if, else if, else)
let fruit_price = 120;
// if (fruit_price==250){
//     console.log("this price is so high");
//     console.log(150+100);
// } // statement match with above statement.
if (fruit_price == 100) {
    console.log("this is reasonable price");
} // this statment did not match with above so is did not run in terminal.
else if (fruit_price == 120) {
    console.log('price is acceptable');
}
else {
    console.log('this price did not match with actual');
} // by using else wrong statement run.
//Symbole Data Type
// let class1 = ('1');
// let class2 =('2');
//  console.log(class1 == class2);
let class1 = Symbol('1');
let class2 = Symbol('2');
console.log(class1 == class2);
