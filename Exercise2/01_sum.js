const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("Please provide at least two numbers to sum.");
  process.exit(1);
}

const number = args.map((arg) => Number(arg));

if (number.some(isNaN)) {
  console.log("Please ensure all arguments are valid numbers.");
  process.exit(1);
}

const sum = number.reduce((acc, num) => acc + num, 0);

console.log(`The sum of the provided numbers is: ${sum}`);
