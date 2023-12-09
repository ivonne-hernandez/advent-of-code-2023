import readInput from '../read-input.js';

const generateDifferenceRows = (rows) => {
  const newRow = [];
  const lastRow = rows.at(-1);
  for (let i = 0; i < lastRow.length - 1; i++) {
    newRow.push(lastRow[i + 1] - lastRow[i]);
  }
  if (newRow.every(elem => elem === 0)) {
    return [...rows, newRow];
  } else {
    return generateDifferenceRows([...rows, newRow]);
  }
};

const extrapolateNextNumber = (differenceRows) => {
  let nextNumInRow = 0;
  for (let i = 1; i < differenceRows.length; i++) {
    nextNumInRow = nextNumInRow + differenceRows[i].at(-1);
  }
  return nextNumInRow;
};

const extrapolatePreviousNumber = (differenceRows) => {
  let previousNumInRow = 0;
  for (let i = 1; i < differenceRows.length; i++) {
    previousNumInRow = differenceRows[i][0] - previousNumInRow;
  }
  return previousNumInRow;
};

const part1 = (input) => {
  return input.reduce((sum, line) => {
    const numbers = line.split(' ').map(num => Number(num));
    const differenceRows = generateDifferenceRows([numbers]).toReversed();
    return sum + extrapolateNextNumber(differenceRows);
  }, 0);
};

const part2 = (input) => {
  return input.reduce((sum, line) => {
    const numbers = line.split(' ').map(num => Number(num));
    const differenceRows = generateDifferenceRows([numbers]).toReversed();
    return sum + extrapolatePreviousNumber(differenceRows);
  }, 0);
};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
