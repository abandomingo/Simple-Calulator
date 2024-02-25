let display = document.getElementById('display');
let currentInput = '';

function appendCharacter(char) {
    currentInput += char;
    display.innerHTML = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerHTML = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.innerHTML = currentInput;
    } catch (error) {
        display.innerHTML = 'Error';
    }
}
