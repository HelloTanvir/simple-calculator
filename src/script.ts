import { Calculator } from "./Calculator.js";

const digits = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const del = document.querySelector(".delete");
const ac = document.querySelector(".ac");
const plusMinus = document.querySelector(".plusMinus");
const currentOperandTextElement = document.querySelector(".current");
const previousOperandTextElement = document.querySelector(".previous");

if (
  previousOperandTextElement &&
  currentOperandTextElement &&
  equal &&
  ac &&
  del &&
  plusMinus
) {
  const myCalculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
  );

  digits.forEach((button) => {
    button.addEventListener("click", () => {
      myCalculator.appendNumber(button.innerHTML);
      myCalculator.updateDisplay();
    });
  });

  operator.forEach((button) => {
    button.addEventListener("click", () => {
      myCalculator.chooseOperation(button.innerHTML);
      myCalculator.updateDisplay();
    });
  });

  equal.addEventListener("click", () => {
    myCalculator.compute();
    myCalculator.updateDisplay();
  });

  ac.addEventListener("click", () => {
    myCalculator.clear();
    myCalculator.updateDisplay();
  });

  del.addEventListener("click", () => {
    myCalculator.delete();
    myCalculator.updateDisplay();
  });

  plusMinus.addEventListener("click", () => {
    myCalculator.reverse();
    myCalculator.updateDisplay();
  });
}
