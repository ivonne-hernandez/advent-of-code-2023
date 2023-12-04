import readInput from "../read-input.js";

const getBoundariesOfAdjacentBox = (match, rowNumber, allLines) => {
  const matchStartingColumn = match.index;
  const matchEndingColumn = match.index + match[0].length - 1;

  const leftMostColumn = matchStartingColumn === 0 ? 0 : matchStartingColumn - 1;
  const rightMostColumn = matchEndingColumn === allLines[0].length - 1 ?
    matchEndingColumn :
    matchEndingColumn + 1;
  const topRow = rowNumber === 0 ? 0 : rowNumber - 1;
  const bottomRow = rowNumber === allLines.length - 1 ? rowNumber : rowNumber + 1;

  return { left: leftMostColumn, right: rightMostColumn, top: topRow, bottom: bottomRow };
};

const findAdjacentCharacters = (match, rowNumber, allLines) => {
  const { left, right, top, bottom } = getBoundariesOfAdjacentBox(match, rowNumber, allLines);

  const adjacentCharacters = [];
  for (let i = top; i <= bottom; i++) {
    const rowSubstring = allLines[i].slice(left, right + 1);
    if (i === rowNumber) {
      adjacentCharacters.push(...rowSubstring.replace(match, '').split(''));
    } else {
      adjacentCharacters.push(...rowSubstring.split(''));
    }
  }
  return adjacentCharacters;
};

const determineValidEnginePartNumber = (match, rowNumber, allLines) => {
  const adjacentCharacters = findAdjacentCharacters(match, rowNumber, allLines);
  return adjacentCharacters.some(character => character !== '.' && /\D/.test(character));
};

const findEnginePartNumbers = (line, rowNumber, allLines) => {
  const possibleMatches = Array.from(line.matchAll(/\d+/g));
  return possibleMatches.filter(match => determineValidEnginePartNumber(match, rowNumber, allLines))
    .map(match => Number(match[0]));
};

const part1 = (input) => {
  return input.flatMap((line, rowNumber, allLines) => findEnginePartNumbers(line, rowNumber, allLines))
    .reduce((sum, num) => sum + num, 0);
};

const part2 = (input) => {

};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
