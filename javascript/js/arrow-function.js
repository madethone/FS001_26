let a  =10;
let b = 10;

//Tranditional function

// function totalValue () {
//     console.log(sumAB())
// }

// function sumAB(){
//     return a + b;
// }


//Arrow function

//1. Declare const or let before function name
//2. Declare function name

// const totalValue = () => console.log(sumAB());
const totalValue = (operatorName) => {
    switch(operatorName){
        case '+':
            sumAB();
            break;
        case '-':
            minusValue();
            break;
        default: 
            logError();
            break;
        
    }
}

const sumAB = () => a + b;
const minusValue = (firstVal, secondVal) => firstVal - secondVal;
const logError = () => console.error('Invalid operator name');