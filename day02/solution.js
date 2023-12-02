import readInput from "../read-input.js";

const possibleCubeCounts = {
  'red': 12,
  'green': 13,
  'blue': 14,
};

const getGameId = (gameRecord) => {
  return Number(gameRecord.match(/^Game (\d+):/)[1]);
};

const determineIfGameIsPossible = (gameRecord) => {
  const redCounts = [...gameRecord.matchAll(/(\d+) red/g)].map(match => match[1]);
  if (redCounts.some(count => count > possibleCubeCounts.red)) return false;

  const greenCounts = [...gameRecord.matchAll(/(\d+) green/g)].map(match => match[1]);
  if (greenCounts.some(count => count > possibleCubeCounts.green)) return false;

  const blueCounts = [...gameRecord.matchAll(/(\d+) blue/g)].map(match => match[1]);
  if (blueCounts.some(count => count > possibleCubeCounts.blue)) return false;

  return true;
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
