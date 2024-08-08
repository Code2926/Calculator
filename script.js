// Get the display input element
const display = document.getElementById('calc-display');

// Function to clear all input
function clearAll() {
  display.value = '0';
}

// Function to clear the last entry
function clearEntry() {
  if (display.value !== '0') {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
      display.value = '0';
    }
  }
}

// Function to input a value
function inputValue(val) {
  if (display.value === '0' && val !== '.') {
    display.value = val;
  } else {
    display.value += val;
  }
}

// Function to calculate the result
function calculate() {
  try {
    const result = eval(display.value);
    display.value = result.toString();
  } catch (e) {
    display.value = 'Error';
  }
}