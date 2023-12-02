import readInput from "../read-input.js";

const part1Regexes = [/\d/g];

const part2Regexes = [
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

const findDigit = (line, regexes, sortFunction) => {
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

const sumCalibrationValues = (input, regexes) => {
  const numbers = input.map(line => {
    const firstDigit = findDigit(line, regexes, sortByIndexAscending);
    const lastDigit = findDigit(line, regexes, (a, z) => sortByIndexAscending(z, a));
    return (10 * firstDigit) + lastDigit;
  });
  return numbers.reduce((sum, num) => sum + num, 0);
};

const part1 = (input) => sumCalibrationValues(input, part1Regexes);
const part2 = (input) => sumCalibrationValues(input, part2Regexes);

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
