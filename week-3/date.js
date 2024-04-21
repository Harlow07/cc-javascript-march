function timeForMilkAndCookies(date){
//console.log(date.getMonth());
//console.log(date.getDate());

if (date.getMonth() === 11 && date.getDate() === 24){
    return true;
} else {
    return false;
}
}

console.log(timeForMilkAndCookies(new Date (2013, 11, 24)));


function isSameNumber (num1, num2){
    if (num1 === num2){
        return true;
    }   else {
        return false;
    }
}

console.log(isSameNumber(2, 7));


function calculateNumber (number1, number2){
    if (number1 + number2 === 30){
        return true;
    }   else {
        return false;
    }
}

console.log(calculateNumber (6, 27));



function findSeven (numbers){
    if (any 7 in str(num) for num in numbers){
        return "Boom!"
    } else {
        return "There is no 7 in the array"
    }
}