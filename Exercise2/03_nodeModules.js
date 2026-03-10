const math = require("./modules/03_nodeModulesMath");

let args = process.argv.slice(2);

if (args.length < 3) {
  console.log(
    " ERROR: Not enough operators! USAGE: node ex3 <operation> <number1> <number2>",
  );
} else {
  switch (args[0]) {
    case "+":
      console.log(
        `The result of the addition is: ${Number(args[1]) + Number(args[2])}`,
      );
      break;
    case "-":
      console.log(
        `The result of the subtraction is: ${Number(args[1]) - Number(args[2])}`,
      );
      break;
    case "*":
      console.log(
        `The result of the multiplication is: ${Number(args[1]) * Number(args[2])}`,
      );
      break;
    case "/":
      if (Number(args[2]) === 0) {
        console.log(" ERROR: Division by zero is not allowed.");
      } else {
        console.log(
          `The result of the division is: ${Number(args[1]) / Number(args[2])}`,
        );
      }
      break;
    default:
      console.log(
        " ERROR: Invalid operation! Supported operations are: addition, subtraction, multiplication, division.",
      );
  }
}
