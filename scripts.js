
const firstOperand = prompt("first number:", '');

const operator = prompt("operator", "+");

const secondOperand = prompt("second number:",'');


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
    //console.log("fire add function!");
    // console.log("add firstOperand: ", firstOperand);
    // console.log("add secondOperand: ", secondOperand);
    //  console.log("add operator: ", operator);
    let a = parseInt(firstOperand);
    let b = parseInt(secondOperand);
    result = a + b;
    alert(result);
    console.log(result);
    return result;
}

function subtract (firstOperand, secondOperand) {
    //console.log("fire add function!");
    // console.log("add firstOperand: ", firstOperand);
    // console.log("add secondOperand: ", secondOperand);
    //  console.log("add operator: ", operator);
    let a = parseInt(firstOperand);
    let b = parseInt(secondOperand);
    result = a - b;
    alert(result);
    console.log(result);
    return result;
}

function multiply (firstOperand, secondOperand) {
    
    //console.log("fire * function!");
    // console.log("* firstOperand: ", firstOperand);
    // console.log("* secondOperand: ", secondOperand);
    //  console.log("* operator: ", operator);
    let a = parseInt(firstOperand);
    let b = parseInt(secondOperand);
    result = a * b;
    alert(result);
    console.log(result);
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
        result = a / b;
        alert(result);
        console.log(result);
        return result;
    };

}
