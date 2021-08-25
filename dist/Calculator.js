var Calculator = /** @class */ (function () {
    function Calculator(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
    Calculator.prototype.clear = function () {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    };
    Calculator.prototype.delete = function () {
        var _a;
        this.currentOperand = (_a = this === null || this === void 0 ? void 0 : this.currentOperand) === null || _a === void 0 ? void 0 : _a.toString().slice(0, -1);
    };
    Calculator.prototype.appendNumber = function (number) {
        var _a, _b;
        if (number === "." && ((_a = this === null || this === void 0 ? void 0 : this.currentOperand) === null || _a === void 0 ? void 0 : _a.includes(".")))
            return;
        this.currentOperand = ((_b = this === null || this === void 0 ? void 0 : this.currentOperand) === null || _b === void 0 ? void 0 : _b.toString()) + number.toString();
    };
    Calculator.prototype.chooseOperation = function (operation) {
        if (this.currentOperand === "")
            return;
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    };
    Calculator.prototype.compute = function () {
        var result;
        var firstOperand = (this.previousOperand && +this.previousOperand) || 0;
        var secondOperand = (this.currentOperand && +this.currentOperand) || 0;
        if (isNaN(firstOperand) || isNaN(secondOperand))
            return;
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
    };
    Calculator.prototype.getDisplayNumber = function (number) {
        var strNum = number.toString();
        var intPart = parseFloat(strNum.split(".")[0]);
        var decimalPart = strNum.split(".")[1];
        var intDisplay;
        if (isNaN(intPart)) {
            intDisplay = "";
        }
        else {
            intDisplay = intPart.toLocaleString("en", { maximumFractionDigits: 0 });
        }
        if (decimalPart != null) {
            return intDisplay + "." + decimalPart;
        }
        else {
            return intDisplay;
        }
    };
    Calculator.prototype.updateDisplay = function () {
        this.currentOperandTextElement.innerHTML =
            (this.currentOperand && this.getDisplayNumber(this.currentOperand)) || "";
        if (this.operation != null) {
            this.previousOperandTextElement.innerHTML =
                (this.previousOperand &&
                    this.getDisplayNumber(this.previousOperand) + " " + this.operation) ||
                    "";
        }
        else {
            this.previousOperandTextElement.innerHTML = "";
        }
    };
    Calculator.prototype.reverse = function () {
        this.currentOperand =
            this.currentOperand && (+this.currentOperand * -1).toString();
    };
    return Calculator;
}());
export { Calculator };
