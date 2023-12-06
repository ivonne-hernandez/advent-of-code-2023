import readInput from "../read-input.js";

const parseInput = (input) => {
  const times = input[0].replace(/Time:\s+/, '')
    .replaceAll(/\s+/g, ',')
    .split(',')
    .map(num => Number(num));
  const distances = input[1].replace(/Distance:\s+/, '')
    .replaceAll(/\s+/g, ',')
    .split(',')
    .map(num => Number(num));
  return times.map((time, i) => {
    return { time, distance: distances[i] };
  });
};

const parseInput2 = (input) => {
  const time = Number(input[0].replace(/Time:\s+/, '').replaceAll(/\s+/g, ''));
  const distance = Number(input[1].replace(/Distance:\s+/, '').replaceAll(/\s+/g, ''));
  return { time, distance };
};

const calculateWaysToWin = ({ time, distance }) => {
  let waysToWinCount = 0;
  for (let holdTime = 0; holdTime <= time; holdTime++) {
    const moveTime = time - holdTime;
    if (holdTime * moveTime > distance) {
      waysToWinCount += 1;
    }
  }
  return waysToWinCount;
};

const part1 = (input) => {
  const races = parseInput(input);
  const waysToWinCounts = races.map(race => calculateWaysToWin(race));
  return waysToWinCounts.reduce((product, num) => product * num, 1);
};

const part2 = (input) => {
  const race = parseInput2(input);
  return calculateWaysToWin(race);
};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
