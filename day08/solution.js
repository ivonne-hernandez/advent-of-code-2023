import readInput from "../read-input.js";
import lcm from "compute-lcm";

const buildMap = (input) => {
  return input.reduce((acc, line) => {
    const [node, left, right] = Array.from(line.matchAll(/[0-9A-Z]{3}/g));
    acc[node[0]] = { L: left[0], R: right[0] };
    return acc;
  }, {});
};

const countStepsToZ = (instructions, map, startingKey, endingKeyRegex) => {
  if (!map[startingKey]) return -1;

  let key = startingKey;
  let instructionIndex = 0;
  let stepCount = 1;

  while (!endingKeyRegex.test(map[key][instructions[instructionIndex]])) {
    key = map[key][instructions[instructionIndex]];
    stepCount += 1;
    if (instructionIndex !== instructions.length - 1) {
      instructionIndex += 1;
    } else {
      instructionIndex = 0;
    }
  }

  return stepCount;
};

const part1 = (input) => {
  const instructions = input[0];
  const map = buildMap(input.slice(2));
  return countStepsToZ(instructions, map, 'AAA', /ZZZ/);
};

const part2 = (input) => {
  const instructions = input[0];
  const map = buildMap(input.slice(2));
  const startingKeys = Object.keys(map).filter(key => /[0-9A-Z]{2}A/.test(key));
  const stepsToZ = startingKeys.map(key => countStepsToZ(instructions, map, key, /[0-9A-Z]{2}Z/));
  if (stepsToZ.length === 1) return stepsToZ[0];
  return lcm(stepsToZ);
};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
