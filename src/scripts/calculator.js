console.log('CALCULATOR APP IS RUNNING!!!!');

var numbers = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var equals = document.getElementById("equals");
var clear = document.getElementById("clear");
var mainValue = ducument.getElementById("mainValue");
var digits = []; // The digits being used to create a full number
var fullNumbers = []; // The joined('') digits that will create the list of numbers used for calculation 
var currentNumber = []; // The current number being input
var currentValue = []; // Value being tracked
var currentOperator = [];// Current operator that is about to fire

var numberSelect = function() {
    var number = this.getAttribute("value"); // This function pulls the html value="" attribute of each element. That number will be pushed into the constants array.
    digits.push(parseInt(number)); // Adds individual digits to digits array
    currentNumber.push(parseInt(digits.join('')));
    console.log(currentNumber[currentNumber.length - 1]);
};
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numberSelect, false); 
    // this loops through all the members of the "numbers" class and makes each element available to be clicked
    // I attempted to simply pull a unique id from each class member but it would only the first element was available to be clicked
}







//Operator functions
add.addEventListener('click', function(){ 
    fullNumbers.push(currentNumber[currentNumber.length - 1]); // Concatenates the digits array and turns them into one whole number.
    currentOperator.push('+');
    digits = []; // Empties out previous digits used to avoid concatenation (11 + 11 = 1111) from occuring.
    // console.log(fullNumbers)
    // console.log(fullNumbers[fullNumbers.length - 1])
    if (fullNumbers.length == 1){
        currentValue.push(fullNumbers[0]);
        console.log(currentValue);
    } else {
        if(currentOperator[currentOperator.length - 2] == '+') {
            currentValue.push(currentValue[currentValue.length - 1] + fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '-') {
            currentValue.push(currentValue[currentValue.length - 1] - fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '*') {
            currentValue.push(currentValue[currentValue.length - 1] * fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '/') {
            currentValue.push(currentValue[currentValue.length - 1] / fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        }
        // currentValue.push(currentValue[currentValue.length - 1] + fullNumbers[fullNumbers.length - 2]);
        // console.log(currentValue);
        // console.log(currentValue[currentValue.length - 1]); 
    }
})
subtract.addEventListener('click', function(){
    fullNumbers.push(currentNumber[currentNumber.length - 1]); // Concatenates the digits array and turns them into one whole number.
    currentOperator.push('-');
    digits = []; // Empties out previous digits used to avoid concatenation (11 + 11 = 1111) from occuring.
    if (fullNumbers.length == 1){
        currentValue.push(fullNumbers[0]);
        console.log(currentValue);
    } else {
        if(currentOperator[currentOperator.length - 2] == '+') {
            currentValue.push(currentValue[currentValue.length - 1] + fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '-') {
            currentValue.push(currentValue[currentValue.length - 1] - fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '*') {
            currentValue.push(currentValue[currentValue.length - 1] * fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '/') {
            currentValue.push(currentValue[currentValue.length - 1] / fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        }
    }
})
multiply.addEventListener('click', function(){
    fullNumbers.push(currentNumber[currentNumber.length - 1]); // Concatenates the digits array and turns them into one whole number.
    currentOperator.push('*');
    digits = []; // Empties out previous digits used to avoid concatenation (11 + 11 = 1111) from occuring.
    if (fullNumbers.length == 1){
        currentValue.push(fullNumbers[0]);
        console.log(currentValue);
    } else {
        if(currentOperator[currentOperator.length - 2] == '+') {
            currentValue.push(currentValue[currentValue.length - 1] + fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '-') {
            currentValue.push(currentValue[currentValue.length - 1] - fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '*') {
            currentValue.push(currentValue[currentValue.length - 1] * fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '/') {
            currentValue.push(currentValue[currentValue.length - 1] / fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        }
    }
})
divide.addEventListener('click', function(){
    fullNumbers.push(currentNumber[currentNumber.length - 1]); // Concatenates the digits array and turns them into one whole number.
    currentOperator.push('/');
    digits = []; // Empties out previous digits used to avoid concatenation (11 + 11 = 1111) from occuring.
    if (fullNumbers.length == 1){
        currentValue.push(fullNumbers[0]);
        console.log(currentValue);
    } else {
        if(currentOperator[currentOperator.length - 2] == '+') {
            currentValue.push(currentValue[currentValue.length - 1] + fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '-') {
            currentValue.push(currentValue[currentValue.length - 1] - fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '*') {
            currentValue.push(currentValue[currentValue.length - 1] * fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 2] == '/') {
            currentValue.push(currentValue[currentValue.length - 1] / fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        }
    }
})
equals.addEventListener('click', function(){
        fullNumbers.push(currentNumber[currentNumber.length - 1]);
        if(currentOperator[currentOperator.length - 1] == '+') {
            currentValue.push(currentValue[currentValue.length - 1] + fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 1] == '-') {
            currentValue.push(currentValue[currentValue.length - 1] - fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 1] == '*') {
            currentValue.push(currentValue[currentValue.length - 1] * fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        } else if(currentOperator[currentOperator.length - 1] == '/') {
            currentValue.push(currentValue[currentValue.length - 1] / fullNumbers[fullNumbers.length - 1]);
            console.log(currentValue[currentValue.length - 1]);  
        }
        fullNumbers = [currentValue[currentValue.length - 1]];
        currentOperator = [];
})
clear.addEventListener('click', function(){
     digits = []; 
     fullNumbers = [];  
     currentNumber = []; 
     currentOperator = [];
     currentValue = [];
     console.log(currentValue);
});


// CURRENT VALUE DISPLAYED






// Notes:
// - Using ES5 to start and then refactoring into ES6 after completion

// - Necessary compnents for the calculator all nine digits including zero

// - Find a way to keep track and display the numbers used for calculation and what operators. Example: If 33 + 225 * 8 + 26... was entered it should show inside of the results field.

// Refactor those operator functions down
// Refactoring Notes
// Reduce the use of the fullNumbers.push(digits.join('')) function;
