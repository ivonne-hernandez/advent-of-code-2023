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
  const red = [...gameRecord.matchAll(/(\d+) red/g)].map(match => match[1]);
  const green = [...gameRecord.matchAll(/(\d+) green/g)].map(match => match[1]);
  const blue = [...gameRecord.matchAll(/(\d+) blue/g)].map(match => match[1]);
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

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
}

export { part1 };
