
const firstOperand = prompt("first number:", '');

const operator = prompt("operator", "+");

const secondOperand = prompt("second number:",'');

const calculateButton = document.querySelector('#calculate')


operate(firstOperand, secondOperand, operator);


function operate (firstOperand, secondOperand, operator) {
    console.log("fire operate function!");
   // console.log("operate firstOperand: ", firstOperand);
   // console.log("operate secondOperand: ", secondOperand);
  //  console.log("operate operator: ", operator);
    switch (operator) {

        case '+':
            return add(firstOperand, secondOperand);
          
        case '-':
            return subtract(firstOperand, secondOperand);
            
        case '*':
            return multiply(firstOperand, secondOperand);
           
        case '/':
            return divide(firstOperand, secondOperand);
           
        default:
            throw new Error ("please input a valid operator");
            
    }

}


function add (firstOperand, secondOperand) {
    console.log("fire add function!");
    console.log("add firstOperand: ", firstOperand);
    console.log("add secondOperand: ", secondOperand);
    //  console.log("add operator: ", operator);
    let a = Number(firstOperand);
    let b = Number(secondOperand);


    intermediateResult = Number(a + b)
    if (isWholeNumber(intermediateResult)) {
        result = Number(intermediateResult);
    } else {
        result = Number(intermediateResult.toFixed(3));
    }

    alert(result);
    return result;

}

function subtract (firstOperand, secondOperand) {
    //console.log("fire add function!");
    // console.log("add firstOperand: ", firstOperand);
    // console.log("add secondOperand: ", secondOperand);
    //  console.log("add operator: ", operator);
    let a = Number(firstOperand);
    let b = Number(secondOperand);
  
    intermediateResult = Number(a - b)
    if (isWholeNumber(intermediateResult)) {
        result = Number(intermediateResult);
    } else {
        result = Number(intermediateResult.toFixed(3));
    }

    alert(result);
    return result;

}


function multiply (firstOperand, secondOperand) {
    
    //console.log("fire * function!");
    // console.log("* firstOperand: ", firstOperand);
    // console.log("* secondOperand: ", secondOperand);
    //  console.log("* operator: ", operator);
    let a = Number(firstOperand);
    let b = Number(secondOperand);
    
    intermediateResult = Number(a * b)
    if (isWholeNumber(intermediateResult)) {
        result = Number(intermediateResult);
    } else {
        result = Number(intermediateResult.toFixed(3));
    }

    alert(result);
    return result;



}

function divide (firstOperand, secondOperand) {
    //console.log("fire / function!");
    // console.log("/ firstOperand: ", firstOperand);
    // console.log("/ secondOperand: ", secondOperand);
    //  console.log("/ operator: ", operator);
    let a = parseInt(firstOperand);
    let b = parseInt(secondOperand);
    if ( b === 0 ) {
        throw new Error ("Dont even think about dividing by zero!");
    } else {
        intermediateResult = Number(a / b)
        if (isWholeNumber(intermediateResult)) {
            result = Number(intermediateResult);
        } else {
            result = Number(intermediateResult.toFixed(3));
        }
    }

    alert(result);
    return result;

    

}

function isWholeNumber (intermediateResult) {
    let result = (intermediateResult - Math.floor(intermediateResult)) !== 0;
    if (result) {
        console.log("iswhole.... NOT a whole number");
        return false;
    } else
    console.log("iswhole.... whole number!");
        return true;
}

function clear () {

}

function delete () {

}