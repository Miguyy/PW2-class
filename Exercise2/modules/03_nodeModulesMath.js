function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return "ERROR: Cannot divide by zero!";
  }
  return a / b;
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
