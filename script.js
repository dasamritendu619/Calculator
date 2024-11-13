// JavaScript to handle calculator logic

// Initialize variables
let display = document.getElementById('result');
let currentInput = '';  // Tracks the current input string
let currentOperation = ''; // Stores the current operation expression

// Event listener for button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        let value = this.getAttribute('data-value');

        if (value === 'C') {
            // Clear the display
            currentInput = '';
            display.value = '';
        } else if (value === '=') {
            // Calculate the expression
            try {
                display.value = eval(currentInput);
                currentInput = display.value; // Store result for next calculation
            } catch (error) {
                display.value = 'Error'; // Error handling
                currentInput = '';
            }
        } else {
            // Append numbers/operators to the current input
            currentInput += value;
            display.value = currentInput;
        }
    });
});
