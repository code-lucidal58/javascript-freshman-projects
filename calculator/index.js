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
        if (calculator.displayValue === '-') {
            calculator.displayValue = '-0.';
            return;
        }
        if (calculator.waitingForSecondOperand) {
            calculator.displayValue = '0.';
            calculator.waitingForSecondOperand = false;
            return;
        }
        // there can be only one dot
        if (!calculator.displayValue.includes(dot)) {
            calculator.displayValue += dot;
        }
    }

    function handleOperator(nextOperator) {
        const {firstOperand, displayValue, operator} = calculator;
        const inputValue = parseFloat(displayValue);
        if (nextOperator === '-' && (operator === null || operator==='=') && (isNaN(inputValue) || inputValue === 0)){
            // handle input of negative numbers
            calculator.displayValue = nextOperator;
            calculator.waitingForSecondOperand = false;
            return;
        }
        if (operator && calculator.waitingForSecondOperand) {
            calculator.operator = nextOperator;
            return;
        }
        if (firstOperand === null && !isNaN(inputValue)) {
            calculator.firstOperand = inputValue;
        } else if (operator) {
            const result = calculate(firstOperand, inputValue, operator);
            calculator.displayValue = String(result);
            calculator.firstOperand = result;
        }
        calculator.waitingForSecondOperand = true;
        calculator.operator = nextOperator;
        console.log(calculator);
    }

    function calculate(firstOperand, secondOperand, operator) {
        switch (operator){
            case '+': return firstOperand+secondOperand;
            case '-': return firstOperand-secondOperand;
            case '*': return firstOperand*secondOperand;
            case '/': return firstOperand/secondOperand;
        }
        return secondOperand;
    }

    function updateDisplay() {
        const display = document.querySelector('.calculator-screen');
        display.value = calculator.displayValue;
    }

    function resetCalculator() {
        calculator.displayValue = '0';
        calculator.firstOperand = null;
        calculator.waitingForSecondOperand = false;
        calculator.operator = null;
        console.log(calculator);
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
            resetCalculator();
            updateDisplay();
        } else {
            inputDigit(target.value);
            updateDisplay();
        }

    })
}

window.onload = afterLoad;