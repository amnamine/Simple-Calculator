function appendToDisplay(value) {
    const display = document.getElementById("display");
    if (display.value === 'Error') {
        display.value = '';
    }
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = '';
}

function backspace() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById("display");
    try {
        // Replace the display operators with JavaScript operators
        let expression = display.value
            .replace('×', '*')
            .replace('−', '-');
        
        // Validate the expression
        if (!expression) return;
        
        // Evaluate and format the result
        const result = eval(expression);
        
        // Handle different number types
        if (Number.isInteger(result)) {
            display.value = result.toString();
        } else {
            display.value = parseFloat(result.toFixed(8)).toString();
        }
    } catch (error) {
        display.value = 'Error';
        console.error('Calculation error:', error);
    }
}
