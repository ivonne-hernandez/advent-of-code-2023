import readInput from "../read-input.js";

const findAdjacentCharacters = (lines, rowNumber, columnNumbers, matchedString) => {
  const leftMostColumn = columnNumbers[0] === 0 ? 0 : columnNumbers[0] - 1;
  const rightMostColumn = columnNumbers.at(-1) === lines[0].length - 1 ?
    columnNumbers.at(-1) :
    columnNumbers.at(-1) + 1;
  const topRow = rowNumber === 0 ? 0 : rowNumber - 1;
  const bottomRow = rowNumber === lines.length - 1 ? rowNumber : rowNumber + 1;

  const adjacentCharacters = [];
  for (let i = topRow; i <= bottomRow; i++) {
    const rowSubstring = lines[i].slice(leftMostColumn, rightMostColumn + 1);
    if (i === rowNumber) {
      adjacentCharacters.push(...rowSubstring.replace(matchedString, '').split(''));
    } else {
      adjacentCharacters.push(...rowSubstring.split(''));
    }
  }
  return adjacentCharacters;
};

const determineValidEnginePartNumber = (lines, match, rowNumber) => {
  const columnNumbersOfMatchedCharacters = [];
  for (let i = match.index; i < match.index + match[0].length; i++) {
    columnNumbersOfMatchedCharacters.push(i);
  }
  const adjacentCharacters = findAdjacentCharacters(lines, rowNumber, columnNumbersOfMatchedCharacters, match[0]);
  return adjacentCharacters.some(character => character !== '.' && /\D/.test(character));
};

const findEnginePartNumbers = (lines, line, rowNumber) => {
  const possibleMatches = Array.from(line.matchAll(/\d+/g));
  return possibleMatches.filter(match => determineValidEnginePartNumber(lines, match, rowNumber))
    .map(match => Number(match[0]));
};

const part1 = (input) => {
  return input.flatMap((line, i, lines) => findEnginePartNumbers(lines, line, i))
    .reduce((sum, num) => sum + num, 0);
};

const part2 = (input) => {

};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
