let displayValue = '';
let firstValue = null;
let secondValue = null;
let currentOperation = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculate();
    }
    firstValue = parseFloat(displayValue);
    currentOperation = operation;
    displayValue = '';
}

function calculate() {
    secondValue = parseFloat(displayValue);
    if (isNaN(firstValue) || isNaN(secondValue)) return;
    switch (currentOperation) {
        case '+':
            displayValue = (firstValue + secondValue).toString();
            break;
        case '-':
            displayValue = (firstValue - secondValue).toString();
            break;
        case '*':
            displayValue = (firstValue * secondValue).toString();
            break;
        case '/':
            displayValue = (firstValue / secondValue).toString();
            break;
        default:
            return;
    }
    updateDisplay();
    currentOperation = null;
    firstValue = null;
    secondValue = null;
}

function clearDisplay() {
    displayValue = '';
    firstValue = null;
    secondValue = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    let formattedDisplay = '';
    for (let i = 0; i < displayValue.length; i++) {
        if (displayValue[i] === '+' || displayValue[i] === '-' || displayValue[i] === '*' || displayValue[i] === '/') {
            formattedDisplay += ' ' + displayValue[i] + ' '; // Separate operators with spaces
        } else {
            formattedDisplay += displayValue[i];
        }
    }
    displayElement.value = formattedDisplay.trim(); // Trim leading and trailing spaces
}
