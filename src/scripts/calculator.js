console.log('CALCULATOR APP IS RUNNING!!!!');

var numbers = document.getElementsByClassName("number");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var equals = document.getElementById("equals");
var clear = document.getElementById("clear");
var mainValue = document.getElementById("mainValue");
var digits = []; // The digits being used to create a full number
var fullNumbers = []; // The joined('') digits that will create the list of numbers used for calculation 
var currentNumber = []; // The current number being input
var currentValue = []; // Value being tracked
var currentOperator = [];// Current operator that is about to fire
var operatorFunctions = function() {
    fullNumbers.push(currentNumber[currentNumber.length - 1]); // Concatenates the digits array and turns them into one whole number.
    digits = []; // Empties out previous digits used to avoid concatenation (11 + 11 = 1111) from occuring.
    if (fullNumbers.length <= 2){
        currentValue.push(fullNumbers[0]);
        console.log(currentValue[currentValue.length - 1]);
        mainValue.textContent = currentValue[currentValue.length - 1];
    } else {
        if(currentOperator[currentOperator.length - 2] == '+') {
            currentValue.push(currentValue[currentValue.length - 1] + fullNumbers[fullNumbers.length - 1]); 
            mainValue.textContent = currentValue[currentValue.length - 1]; 
        } else if(currentOperator[currentOperator.length - 2] == '-') {
            currentValue.push(currentValue[currentValue.length - 1] - fullNumbers[fullNumbers.length - 1]);
            mainValue.textContent = currentValue[currentValue.length - 1];  
        } else if(currentOperator[currentOperator.length - 2] == '*') {
            currentValue.push(currentValue[currentValue.length - 1] * fullNumbers[fullNumbers.length - 1]);
            mainValue.textContent = currentValue[currentValue.length - 1];  
        } else if(currentOperator[currentOperator.length - 2] == '/') {
            currentValue.push(currentValue[currentValue.length - 1] / fullNumbers[fullNumbers.length - 1]);
            mainValue.textContent = currentValue[currentValue.length - 1];  
        } 
    }
};

// Number Selection Function
var numberSelect = function() {
    var number = this.getAttribute("value"); // This function pulls the html value="" attribute of each element. That number will be pushed into the constants array.
    digits.push(parseInt(number)); // Adds individual digits to digits array
    currentNumber.push(parseInt(digits.join('')));
    mainValue.textContent = currentNumber[currentNumber.length - 1];
};
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numberSelect, false); 
    // this loops through all the members of the "numbers" class and makes each element available to be clicked
    // I attempted to simply pull a unique id from each class member but it would only the first element was available to be clicked
}

// Operator Buttons
add.addEventListener('click', function(){ 
    currentOperator.push('+');
    operatorFunctions();
})
subtract.addEventListener('click', function(){
    currentOperator.push('-');
    operatorFunctions();
})
multiply.addEventListener('click', function(){
    currentOperator.push('*');
    operatorFunctions();
})
divide.addEventListener('click', function(){
    currentOperator.push('/');
    operatorFunctions();
})
equals.addEventListener('click', function(){
        fullNumbers.push(currentNumber[currentNumber.length - 1]);
        if(currentOperator[currentOperator.length - 1] == '+') {
            currentValue.push(currentValue[currentValue.length - 1] + fullNumbers[fullNumbers.length - 1]);  
        } else if(currentOperator[currentOperator.length - 1] == '-') {
            currentValue.push(currentValue[currentValue.length - 1] - fullNumbers[fullNumbers.length - 1]);  
        } else if(currentOperator[currentOperator.length - 1] == '*') {
            currentValue.push(currentValue[currentValue.length - 1] * fullNumbers[fullNumbers.length - 1]);  
        } else if(currentOperator[currentOperator.length - 1] == '/') {
            currentValue.push(currentValue[currentValue.length - 1] / fullNumbers[fullNumbers.length - 1]);  
        } 
        mainValue.textContent = currentValue[currentValue.length - 1];
        fullNumbers = [];
        currentNumber = [];
        currentNumber[0] = currentValue[currentValue.length - 1];
        fullNumbers[0] = currentValue[currentValue.length - 1];
}) 
clear.addEventListener('click', function(){
     digits = []; 
     fullNumbers = [];  
     currentNumber = []; 
     currentOperator = [];
     currentValue = [];
     mainValue.textContent = 0;
});




// Notes:

// - Add Decimal functionality

// - Find a way to keep track and display the numbers used for calculation and what operators. Example: If 33 + 225 * 8 + 26... was entered it should show inside of the results field.

