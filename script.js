let output = document.getElementById('output');

function appendToOutput(value) {
    output.value += value;
}

function clearOutput() {
    output.value = '';
}

function calculateResult() {
    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = 'Error';
    }
}

function calculateSqrt() {
    output.value = Math.sqrt(eval(output.value));
}

function calculateSquare() {
    output.value = eval(output.value) ** 2;
}

function calculateInverse() {
    output.value = 1 / eval(output.value);
}

function calculateSin() {
    output.value = Math.sin(eval(output.value));
}

function calculateCos() {
    output.value = Math.cos(eval(output.value));
}

function calculateTan() {
    output.value = Math.tan(eval(output.value));
}
