import readInput from '../read-input.js';

export const part1 = (input) => {
  const sum = input.reduce((acc, inputLine) => {
    const numberChars = inputLine
      .split('')
      .filter((character) => isNaN(character) === false);
    const firstAndLastDigit = numberChars[0] + numberChars[numberChars.length - 1];
    return acc + Number(firstAndLastDigit);
  }, 0);
  return sum;
}

if (process.env.NODE_ENV !== 'test') {
  console.log(`part 1 solution:`, part1(readInput()));
}