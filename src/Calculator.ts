import { IsCalculator } from "./isCalculator.js";

export class Calculator implements IsCalculator {
  previousOperandTextElement: Element;
  currentOperandTextElement: Element;
  currentOperand: string | undefined;
  previousOperand: string | undefined;
  operation: string | undefined;

  constructor(
    previousOperandTextElement: Element,
    currentOperandTextElement: Element
  ) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this?.currentOperand?.toString().slice(0, -1);
  }

  appendNumber(number: string | number) {
    if (number === "." && this?.currentOperand?.includes(".")) return;
    this.currentOperand = this?.currentOperand?.toString() + number.toString();
  }

  chooseOperation(operation: string) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let result;
    let firstOperand: number =
      (this.previousOperand && +this.previousOperand) || 0;
    let secondOperand: number =
      (this.currentOperand && +this.currentOperand) || 0;
    if (isNaN(firstOperand) || isNaN(secondOperand)) return;
    switch (this.operation) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "×":
        result = firstOperand * secondOperand;
        break;
      case "÷":
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }
    this.currentOperand = result.toString();
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number: string | number) {
    let strNum = number.toString();
    let intPart = parseFloat(strNum.split(".")[0]);
    let decimalPart = strNum.split(".")[1];
    let intDisplay;
    if (isNaN(intPart)) {
      intDisplay = "";
    } else {
      intDisplay = intPart.toLocaleString("en", { maximumFractionDigits: 0 });
    }
    if (decimalPart != null) {
      return `${intDisplay}.${decimalPart}`;
    } else {
      return intDisplay;
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerHTML =
      (this.currentOperand && this.getDisplayNumber(this.currentOperand)) || "";
    if (this.operation != null) {
      this.previousOperandTextElement.innerHTML =
        (this.previousOperand &&
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`) ||
        "";
    } else {
      this.previousOperandTextElement.innerHTML = "";
    }
  }

  reverse() {
    this.currentOperand =
      this.currentOperand && (+this.currentOperand * -1).toString();
  }
}
