import readInput from "../read-input.js";

const regexes = [
  /\d/g,
  /one/g,
  /two/g,
  /three/g,
  /four/g,
  /five/g,
  /six/g,
  /seven/g,
  /eight/g,
  /nine/g
];

const numberWordToNumber = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
};

const findDigit = (line, sortFunction) => {
  const matches = regexes.flatMap(regex => [...line.matchAll(regex)]);
  const sortedMatches = matches.sort(sortFunction);
  const number = sortedMatches[0][0];
  if (Number(number)) {
    return Number(number);
  } else {
    return numberWordToNumber[number];
  }
};

const sortByIndexAscending = (a, z) => {
  if (a.index < z.index) return -1;
  if (a.index > z.index) return 1;
  return 0;
};

const main = (input) => {
  const numbers = input.map(line => {
    const firstDigit = findDigit(line, sortByIndexAscending);
    const lastDigit = findDigit(line, (a, z) => sortByIndexAscending(z, a));
    return (10 * firstDigit) + lastDigit;
  });
  return numbers.reduce((sum, num) => sum + num, 0);
};

if (process.env.NODE_ENV !== 'test') {
  const result = main(readInput());
  console.log(result);
}

export default main;
