var _a, _b, _c, _d;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.validateInputs = function (a, b) {
        if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
            throw new Error('Invalid input: Both arguments must be numbers.');
        }
        return true;
    };
    Calculator.prototype.add = function (a, b) {
        this.validateInputs(a, b);
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        this.validateInputs(a, b);
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        this.validateInputs(a, b);
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        this.validateInputs(a, b);
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    };
    return Calculator;
}());
// Create a calculator instance
var calculator = new Calculator();
// Function to handle button clicks
function handleCalculation(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultElement = document.getElementById('result');
    if (resultElement) {
        try {
            var result = void 0;
            switch (operation) {
                case 'add':
                    result = calculator.add(num1, num2);
                    break;
                case 'subtract':
                    result = calculator.subtract(num1, num2);
                    break;
                case 'multiply':
                    result = calculator.multiply(num1, num2);
                    break;
                case 'divide':
                    result = calculator.divide(num1, num2);
                    break;
                default:
                    result = 'Invalid operation';
            }
            resultElement.textContent = "Result: ".concat(result);
        }
        catch (error) {
            resultElement.textContent = "Error: ".concat(error.message);
        }
    }
}
// Add event listeners to the buttons
(_a = document.getElementById('add')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return handleCalculation('add'); });
(_b = document.getElementById('subtract')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return handleCalculation('subtract'); });
(_c = document.getElementById('multiply')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () { return handleCalculation('multiply'); });
(_d = document.getElementById('divide')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () { return handleCalculation('divide'); });
