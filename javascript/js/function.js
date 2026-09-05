//1. Declare keyword function
//2. Give a function name

//A. function no argument, no return
let a = 10;
let b = 20;

function sumAB() {

    document.getElementById('resultSumAB').innerText = a + b;
}

//B. function have argument, no return

// function sumValue(
//     firstVal, 
//     secondVal, 
//     targetId)
// {

//     document.getElementById(targetId)
//     .innerText = firstVal + secondVal;
// }

function totalValue(
    firstVal,
    secondVal,
    operatorName,
    targetId
) {
    switch (operatorName) {
        case '+':
            console.log(sumValue(firstVal, secondVal));
            document.getElementById(targetId).innerText = sumValue(firstVal, secondVal);
            break;
        case '-':
            console.log(minusValue(firstVal, secondVal));
            document.getElementById(targetId).innerText = minusValue(firstVal, secondVal);
            break;
        default:
            logError();
            break;
    }
}


//C. function have argument, have return

function sumValue(
    firstVal,
    secondVal
) {

    return firstVal + secondVal;
}

function minusValue(
    firstVal,
    secondVal
) {
    return firstVal - secondVal;
}


//D. function no argument, have return
function logError() {
    document.getElementById('alert').innerText = 'Invalid operator name!'; 
    document.getElementById('alert').style.color = 'white';
    document.getElementById('alert').style.backgroundColor = 'red';
    document.getElementById('alert').style.borderRadius = '10';

    return console.error('Operator not found!');
}