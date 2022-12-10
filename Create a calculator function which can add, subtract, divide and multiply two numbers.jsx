
function calculator(operand1, operand2, operator) {
  if (operator === "+") {
    return operand1 + operand2;
  } else if (operator === "-") {
    return operand1 - operand2;
  } else if (operator === "*") {
    return operand1 * operand2;
  } else if (operator === "/") {
    return operand1 / operand2;
  } else {
    return "Invalid operator";
  }
}


function main() {
  var operand1 = prompt("Enter the first operand:");
  var operand2 = prompt("Enter the second operand:");
  var operator = prompt("Enter the operator (+, -, *, /):");

  var result = calculator(operand1, operand2, operator);
  console.log(result);
}


main();