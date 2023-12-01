import readInput from "../read-input.js";

const main = (input) => {
  const numbers = input.map(line => {
    const digitRegex = /\d/;
    const firstDigit = line.match(digitRegex)[0];
    const reversedLine = line.split('').reverse().join();
    const lastDigit = reversedLine.match(digitRegex)[0];
    return (Number(firstDigit) * 10) + Number(lastDigit);
  });
  return numbers.reduce((sum, num) => sum + num, 0);
};

const result = main(readInput());
console.log(result);
