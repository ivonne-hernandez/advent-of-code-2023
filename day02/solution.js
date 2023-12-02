import readInput from "../read-input.js";

const possibleCubeCounts = {
  'red': 12,
  'green': 13,
  'blue': 14,
};

const getGameId = (gameRecord) => {
  return Number(gameRecord.match(/^Game (\d+):/)[1]);
};

const getColorCounts = (gameRecord) => {
  const red = [...gameRecord.matchAll(/(\d+) red/g)].map(match => Number(match[1]));
  const green = [...gameRecord.matchAll(/(\d+) green/g)].map(match => Number(match[1]));
  const blue = [...gameRecord.matchAll(/(\d+) blue/g)].map(match => Number(match[1]));
  return { red, green, blue };
};

const determineIfGameIsPossible = (gameRecord) => {
  const colorCounts = getColorCounts(gameRecord);
  return (
    colorCounts.red.every(count => count <= possibleCubeCounts.red) &&
    colorCounts.green.every(count => count <= possibleCubeCounts.green) &&
    colorCounts.blue.every(count => count <= possibleCubeCounts.blue)
  );
};

const part1 = (input) => {
  return input.reduce((possibleGameIdSums, gameRecord) => {
    if (determineIfGameIsPossible(gameRecord)) {
      possibleGameIdSums += getGameId(gameRecord);
    }
    return possibleGameIdSums;
  }, 0);
};

const findMax = (numbers) => {
  return numbers.reduce((max, num) => {
    if (num > max) {
      return num;
    }
    return max;
  }, numbers[0]);
};

const calculatePower = (gameRecord) => {
  const { red, green, blue } = getColorCounts(gameRecord);
  return findMax(red) * findMax(green) * findMax(blue);
};

const part2 = (input) => {
  return input.reduce((sumOfPowers, gameRecord) => {
    return sumOfPowers + calculatePower(gameRecord);
  }, 0);
};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
