
 let firstOperand;
 let secondOperand;
 let operands =[];

const viewResult = document.getElementById('view-result');
//const operator = prompt("operator", "+");

//const secondOperand = prompt("second number:",'');


let rawNumberString = '';

// Set Calculate Button const and event Listener
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function() {
    console.log(this.value);



});

// Clear Functionality 
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
    console.log("CLEAR");
    rawNumberString = 0;
    firstOperand = '';
    secondOperand = '';
    operands = [];
    return
});

// Delete Functionality 
const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', function() {
    console.log("DELETE");
    rawNumberString = rawNumberString.slice(0, -1);
    
    
});

//Intake Decimal
const decimalButton = document.getElementById('decimal');
decimalButton.addEventListener('click', function() {
    console.log(deleteButton);

    if (!isWholeNumber(rawNumberString) || rawNumberString.slice(-1) === ".") {
        alert("improper decimal choice");
        return;

    } else {

        rawNumberString += (this.value);
    }
});


// Intake Number

document.querySelectorAll('.number-button').forEach(button => {
    button.addEventListener('click', function() {
       
  
   
        rawNumberString += (this.value);
       
        console.log(rawNumberString);

    })
}); 

// Intake Operator
document.querySelectorAll('.operator-button').forEach(button => {
    button.addEventListener('click', function() {
        
        operator = this.value;
   
        numberString = Number(rawNumberString);

        rawNumberString = '';
        operarands = prepareForOperate(numberString);
        console.log("perpare for operate a success! Operands array now shows: ", operands)
        
        firstOperand = operands[0]
        console.log(firstOperand);
        secondOperand = operands[1]
        console.log(secondOperand);
        
        if (operands.length < 2) {
            return;
        } else {
            operate(firstOperand, secondOperand, operator);
        }
       
        
    })
}); 












function operate (firstOperand, secondOperand, operator) {
    console.log("fire operate function!");
    console.log("operate firstOperand: ", firstOperand);
    console.log("operate secondOperand: ", secondOperand);
    console.log("operate operator: ", operator);
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

 
    let a = Number(firstOperand);
    let b = Number(secondOperand);


    intermediateResult = Number(a + b)
    if (isWholeNumber(intermediateResult)) {
        result = Number(intermediateResult);
    } else {
        result = Number(intermediateResult.toFixed(3));
    }

    
    viewResult.textContent = result;
    prepareNewCalculation(result);
    return;

}

function subtract (firstOperand, secondOperand) {

    let a = Number(firstOperand);
    let b = Number(secondOperand);
  
    intermediateResult = Number(a - b)
    if (isWholeNumber(intermediateResult)) {
        result = Number(intermediateResult);
    } else {
        result = Number(intermediateResult.toFixed(3));
    }

    firstOperand = result;
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
    firstOperand = result;
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
        alert("Dont even think about dividing by zero!");
    } else {
        intermediateResult = Number(a / b)
        if (isWholeNumber(intermediateResult)) {
            result = Number(intermediateResult);
        } else {
            result = Number(intermediateResult.toFixed(3));
        }
    }

    firstOperand = result;
    alert(result);
    return result;

    

}

function isWholeNumber (intermediateResult) {
    let result = (intermediateResult - Math.floor(intermediateResult)) !== 0;
    if (result) {
        return false;
    } else
        return true;
}






function prepareForOperate (numberString, firstOperand) {

    





    if (operands.length == 0) {
        firstOperand = numberString;
        operands.push(firstOperand);
 
        return operands;

        
    } else {
        secondOperand = numberString;
        
        
        operands.push(secondOperand);

        return operands;
    }

  
    

}




function createNumberConstants () {

}

function createOperatorConstants () {

}




function prepareNewCalculation (result) {
    firstOperand = result;
    secondOperand = '';
    operands = [];
    operands.push(firstOperand);
    console.log("Calculation Slate Cleansed: ");
    console.log("firstOperand: ", firstOperand);
    console.log("secondOperand: ", secondOperand);
    console.log("operand array: ", operands);
    return;
}
