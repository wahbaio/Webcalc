/*
add value to display
 */
function add(value) {
    document.getElementById('display').value += value;
}

/*
clears display.
 */
function cancel() {
    document.getElementById('display').value = '';
}

/**
perform calculation and shows result in display, shows error if needed
 */
function calculateResult() {
    try {
        // Evaluate the expression
        const result = eval(document.getElementById('display').value);
        // Show result
        document.getElementById('display').value = result;
    } catch (error) {
        // Display error message 
        alert('Error');
    }
}
