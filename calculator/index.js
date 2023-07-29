function afterLoad() {
    const calculator = {
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null
    };

    function inputDigit(digit) {
        const {displayValue, waitingForSecondOperand} = calculator;
        if (waitingForSecondOperand) {
            calculator.displayValue = digit;
            calculator.waitingForSecondOperand = false;
        } else {
            calculator.displayValue = displayValue === '0'? digit: displayValue+digit;
        }
        console.log(calculator);
    }

    function inputDecimal(dot) {
        // there can be only one dot
        if (!calculator.displayValue.includes(dot)) {
            calculator.displayValue += dot;
        }
    }

    function handleOperator(nextOperator) {
        const {firstOperand, displayValue, operator} = calculator;
        const inputValue = parseFloat(displayValue);
        if (firstOperand === null && !isNaN(inputValue)) {
            calculator.firstOperand = inputValue;
        }
        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;
        console.log(calculator);
    }

    function updateDisplay() {
        const display = document.querySelector('.calculator-screen');
        display.value = calculator.displayValue;
    }

    updateDisplay();

    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        const {target} = event;
        if (!target.matches('button')) {
            return;
        } else if (target.classList.contains('operator')) {
            handleOperator(target.value);
            updateDisplay();
        } else if (target.classList.contains('decimal')) {
            inputDecimal(target.value);
            updateDisplay();
        } else if (target.classList.contains('all-clear')) {
            console.log('clear', target.value);
        } else {
            inputDigit(target.value);
            updateDisplay();
        }

    })
}

window.onload = afterLoad;