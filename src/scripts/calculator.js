console.log('CALCULATOR APP IS RUNNING!!!!');

var numbers = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var equals = document.getElementById("equals");
var digits = []; // The digits being used to create a full number
var fullNumbers = []; // The joined('') digits that will create the full numbers used for calculation 

var numberSelect = function() {
    var number = this.getAttribute("value"); // This function pulls the html value="" attribute of each element. That number will be pushed into the constants array.

    console.log(number);
    digits.push(parseInt(number)); // Adds individual digits to digits array 
};
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numberSelect, false); 
    // this loops through all the members of the "numbers" class and makes each element available to be clicked
    // I attempted to simply pull a unique id from each class member but it would only the first element was available to be clicked
}
//Operator functions
add.addEventListener('click', function(){
    fullNumbers.push(parseInt(digits.join(''))); 
    digits = [];
    if(fullNumbers.length == 1){
        console.log(parseInt(fullNumbers[0]))
    } else {
        fullNumbers[0] = fullNumbers[0] + fullNumbers[1];
        console.log(fullNumbers[0]); //At this point there are 2 elements of fullNumbers you may be able to use the second as a way to display the upcoming number to calculate.
        fullNumbers.pop();
    } 
})

subtract.addEventListener('click', function(){
    fullNumbers.push(digits.join(''));
    console.log(fullNumbers);
})

multiply.addEventListener('click', function(){
    fullNumbers.push(digits.join(''));
    console.log(fullNumbers);
})

divide.addEventListener('click', function(){
    fullNumbers.push(digits.join(''));
    console.log(fullNumbers);
})

equals.addEventListener('click', function(){
    console.log(constants[0] + constants[2]);

// This function to take all of the number strings created, turn them into actual numbers "parseInt" and log the result.
// Possible function is to create an if statement stating "if every other element is a particular operator you would perform what that operator does on the following array element" 

// Example: constants = [44, "-", 10, "+", 3]; if(constants[1] == '-'){ return constants[0] - constants[2]}
})






// Notes:
// - Using ES5 to start and then refactoring into ES6 after completion

// - Necessary compnents for the calculator all nine digits including zero


// Refactoring Notes
// Reduce the use of the fullNumbers.push(digits.join('')) function;
