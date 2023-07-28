function afterLoad() {
    const calculator = {
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: null
    };

    function inputDigit(digit) {
        const {displayValue} = calculator;
        calculator.displayValue = displayValue === '0'? digit: displayValue+digit;
    }

    function inputDecimal(dot) {
        // there can be only one dot
        if (!calculator.displayValue.includes(dot)) {
            calculator.displayValue += dot;
        }
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
            console.log('operator', target.value);
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