
let firstOperand;
let secondOperand;

let operator;
let newOperator;

let rawNumberString = '';

const viewResult = document.getElementById('view-result');
const displayOperationDiv = document.getElementById('view-operation');

// ALL CLICK EVENT LISTENER
document.addEventListener('click', function(event) {
    showCalculation();
})

// Calculate Button Event Listener 
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function() {
    if (readyToOperate() = true) {
        operate(firstOperand, secondOperand, operator)
    } else {
        return;
    }
   
    
});

// Clear Functionality Event Listener 
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
    console.log("CLEAR");
    rawNumberString = 0;
    firstOperand = '';
    secondOperand = '';
    operands = [];
    operator = '';
    viewResult.textContent = 0;

    return
});

// Delete Functionality Event Listener 
const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', function() {
    console.log("DELETE");
    if (rawNumberString === ''|| rawNumberString === 0) {
        return;
    } else {
        rawNumberString = rawNumberString.slice(0, -1);
    }
    
    
    
});

//Intake Decimal Event Listener 
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


// Intake Number Event Lisetener 

document.querySelectorAll('.number-button').forEach(button => {
    button.addEventListener('click', function() {
        rawNumberString += (this.value);
        console.log("number button event listener's raw number string: ", rawNumberString);
    })
}); 

// Intake Operator Event Listener
document.querySelectorAll('.operator-button').forEach(button => {
    button.addEventListener('click', function() {
        if (readyToOperate() = true) {
            operate(firstOperand, secondOperand, operator)
        } else {
            buildOperands(firstOperand, secondOperand, rawNumberString)
        }
        operator = this.value;
        console.log("operate button event listener's operator: ", rawNumberString);

        
    })
}); 



function operate (firstOperand, secondOperand, operator) {
    console.log("fire operate function!");
    console.log("operate firstOperand: ", firstOperand);
    console.log("operate secondOperand: ", secondOperand);
    console.log(" operator used in operate function ", operator);
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
            return;
            
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

     
    viewResult.textContent = result;
    prepareNewCalculation(result);
    return;

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

 
    viewResult.textContent = result;
    prepareNewCalculation(result);
    return;



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
    viewResult.textContent = result;
    prepareNewCalculation(result);
    return;


    

}

function isWholeNumber (intermediateResult) {
    let result = (intermediateResult - Math.floor(intermediateResult)) !== 0;
    if (result) {
        return false;
    } else
        return true;
}








function prepareNewCalculation (result) {
    firstOperand = result;
    secondOperand = '';
    console.log("new calculation prepared.... new operator is: ", operator);

    if (newOperator) {
        operator = newOperator;
        newOperator = '';
        displayOperationDiv.textContent = firstOperand + operator;
    } else {
        operator =''
        displayOperationDiv.textContent = firstOperand;

    }
}

function showCalculation() {
    if (!firstOperand && !operator && !secondOperand) {
        displayOperationDiv.textContent = rawNumberString;
    } else if (firstOperand && !operator && !secondOperand) {
        displayOperationDiv.textContent = firstOperand;
    } else if (firstOperand && operator && !secondOperand) {
        displayOperationDiv.textContent = firstOperand + operator + rawNumberString;
    } else if (firstOperand && operator && secondOperand) {
        displayOperationDiv.textContent = firstOperand + operator + secondOperand;
    }
}

// function to evaluate calculation criteria 
function calculate () {
     
}


// Should be fired on any  operator or =
function readyToOperate () {
    // Check state of operation 
    //if ready to calculate
    if (firstOperand && operator && secondOperand) {
        // calculate 
        return true;
    } else {
        return false;
    }
}

function buildOperands (rawNumberString, firstOperand,) {
    //pass number value to numberString
    numberString = Number(rawNumberString);
        
    // reset rawNumberString
    rawNumberString = '';

    // if no operands
    if (!firstOperand) {
        firstOperand = numberString;
        return ;

    // if first operand
    } else if (firstOperands && !secondOperand) {
        secondOperand = numberString;
        return;

    } else {
        return ;
    }
}

