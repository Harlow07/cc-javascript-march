// The sum of two numbers

// INPUT
/*let firstNumber = prompt ("Type in the first number");
firstNumber = Number(firstNumber);

let secondNumber = prompt ("Type in the second number");
secondNumber = Number(secondNumber);

// PROCESSING
let answer  = firstNumber + secondNumber;

// OUTPUT
alert(firstNumber + " + " + secondNumber + " = " + answer);
*/


// Convert minutes to seconds 

// let arrayOfNumbers = [2, 4, 6, 8, 10];
// console.log(arrayOfNumbers[0]);

/*
let finalMessage = "Something" + " ";
finalMessage = finalMessage + "is better than nothing.";
console.log(finalMessage);


let lastMessage = "No place" + " ";
lastMessage = lastMessage + "is better than Home"
console.log(lastMessage);*/


// function myFunction(g1, g2) {
    // return g1 / g2;
// }
// const value = myFunction(8, 2);
// console.log(value);

// function myAction(r1, r4) {
    // return r1 / r4;
// }
// const value = myAction(12, 4);
// console.log(value);

// function calcAddition(number1, number2) {
    // return number1 + number2;
// }
// console.log(calcAddition(6,9));

// let myDivision = function(number1, number2) {
    // let result = number1 / number2;
    // return result;
// }
// console.log(myDivision(15, 3));

/*
let myDivision = (number1, number2) => {
    return number1 /number2;
}
console.log(myDivision(4, 2)); 
*/
/*
let age = prompt("Type in your age");
age = Number(age);

if (age >= 18) {
    alert("You are eligible to vote");
} else { 
    alert("You are too young");
}
*/
/*
let score = 55;

if (score >= 70){
    console.log ("Your grade: A");
} else if (score >= 60){
    console.log ("Your grade: B");
} else if (score >= 50){
    console.log ("Your grade: C");
} else {
    console.log("Your garde: D");
}
*/

let score = prompt("Type in your score");

if (score >= 70){
    alert("Your grade: A");
} else if (score >= 60){
    alert("Your grade: B");
} else if (score >= 50){
    alert("Your grade: C");
} else {
    alert("Your garde: D");
}


/*for (let count = 0; count < 5; count ++){
    console.log("Hello");
    if (count == 3){
        break;
    }
};
*/

/*
let lessThanHundred(22, 15) = true;
22 + 15 = 37;

let higherThanHundred(83, 34) = false;
83 + 34 = 117;

let lastNumber100(3, 77) = true;
*/

let lessThanHundred = prompt ("Type in the first number");
lessThanHundred = Number(lessThanHundred);

let lessThan100 = prompt ("Type in the second number");
lessThan100 = Number(lessThan100);


let answer  = lessThanHundred + lessThan100;

if (answer >= 100) {
    alert("false");
} else if (answer <100){
    alert("true");
}

//alert(lessThanHundred + " + " + lessThan100 + " = " + answer); 