import './styles.css';

document.addEventListener('DOMContentLoaded', function () {
    const operationDisplay = document.getElementById('operation');
    const resultDisplay = document.getElementById('result');
    const buttons = Array.from(document.querySelectorAll('.calculator button'));
    let currentInput = '';
    let operator = '';
    let firstOperand = null;
    let newOperation = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (button.classList.contains('number')) {
                if (newOperation) {
                    currentInput = value;
                    newOperation = false;
                } else {
                    currentInput += value;
                }
                operationDisplay.textContent += value;
            } else if (button.classList.contains('control')) {
                if (value === 'C') {
                    currentInput = '';
                    operator = '';
                    firstOperand = null;
                    operationDisplay.textContent = '';
                    resultDisplay.textContent = '';
                } else if (value === '=') {
                    if (firstOperand !== null && operator && currentInput !== '') {
                        const result = calculate(firstOperand, parseFloat(currentInput), operator);
                        resultDisplay.textContent = result;
                        operationDisplay.textContent += ` ${value} ${result}`;
                        currentInput = result.toString();
                        firstOperand = null;
                        operator = '';
                        newOperation = true;
                    }
                }
            } else if (button.classList.contains('operator')) {
                if (firstOperand === null) {
                    firstOperand = parseFloat(currentInput);
                } else if (operator && currentInput !== '') {
                    firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
                }
                operator = value;
                currentInput = '';
                operationDisplay.textContent += ` ${value} `;
            }
        });
    });

    function calculate(a, b, operator) {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return b;
        }
    }

    // Dummy unused function
    function unusedFunction() {
        console.log('This is an unused function');
    }
});
