interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number | string;
}

class Calculator implements ICalculator {
    private validateInputs(a: any, b: any): boolean {
        if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
            throw new Error('Invalid input: Both arguments must be numbers.');
        }
        return true;
    }

    add(a: number, b: number): number {
        this.validateInputs(a, b);
        return a + b;
    }

    subtract(a: number, b: number): number {
        this.validateInputs(a, b);
        return a - b;
    }

    multiply(a: number, b: number): number {
        this.validateInputs(a, b);
        return a * b;
    }

    divide(a: number, b: number): number | string {
        this.validateInputs(a, b);
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    }
}

// Create a calculator instance
const calculator = new Calculator();

// Function to handle button clicks
function handleCalculation(operation: string) {
    const num1 = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
    const num2 = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
    const resultElement = document.getElementById('result');

    if (resultElement) {
        try {
            let result: number | string;
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
            resultElement.textContent = `Result: ${result}`;
        } catch (error) {
            resultElement.textContent = `Error: ${error.message}`;
        }
    }
}

// Add event listeners to the buttons
document.getElementById('add')?.addEventListener('click', () => handleCalculation('add'));
document.getElementById('subtract')?.addEventListener('click', () => handleCalculation('subtract'));
document.getElementById('multiply')?.addEventListener('click', () => handleCalculation('multiply'));
document.getElementById('divide')?.addEventListener('click', () => handleCalculation('divide'));
