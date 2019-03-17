console.log('CALCULATOR APP IS RUNNING!!!!');

var numbers = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator")

var numberSelect = function() {
    var number = this.getAttribute("value");
    console.log(number); 
    // This function pulls the html value="" attribute of each element. console.log() is only temporary. 
};
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numberSelect, false); 
    // this loops through all the members of the "numbers" class and makes each element available to be clicked
    // I attempted to simply pull a unique id from each class member but it would only the first element was available to be clicked
}






// Notes:
// - Using ES5 to start and then refactoring into ES6 after completion

// - Necessary compnents for the calculator all nine digits including zero
