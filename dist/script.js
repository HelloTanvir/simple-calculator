import { Calculator } from "./Calculator.js";
var digits = document.querySelectorAll(".digit");
var operator = document.querySelectorAll(".operator");
var equal = document.querySelector(".equal");
var del = document.querySelector(".delete");
var ac = document.querySelector(".ac");
var plusMinus = document.querySelector(".plusMinus");
var currentOperandTextElement = document.querySelector(".current");
var previousOperandTextElement = document.querySelector(".previous");
if (previousOperandTextElement &&
    currentOperandTextElement &&
    equal &&
    ac &&
    del &&
    plusMinus) {
    var myCalculator_1 = new Calculator(previousOperandTextElement, currentOperandTextElement);
    digits.forEach(function (button) {
        button.addEventListener("click", function () {
            myCalculator_1.appendNumber(button.innerHTML);
            myCalculator_1.updateDisplay();
        });
    });
    operator.forEach(function (button) {
        button.addEventListener("click", function () {
            myCalculator_1.chooseOperation(button.innerHTML);
            myCalculator_1.updateDisplay();
        });
    });
    equal.addEventListener("click", function () {
        myCalculator_1.compute();
        myCalculator_1.updateDisplay();
    });
    ac.addEventListener("click", function () {
        myCalculator_1.clear();
        myCalculator_1.updateDisplay();
    });
    del.addEventListener("click", function () {
        myCalculator_1.delete();
        myCalculator_1.updateDisplay();
    });
    plusMinus.addEventListener("click", function () {
        myCalculator_1.reverse();
        myCalculator_1.updateDisplay();
    });
}
