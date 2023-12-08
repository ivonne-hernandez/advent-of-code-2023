import readInput from "../read-input.js";

const buildMap = (input) => {
  return input.reduce((acc, line) => {
    const [node, left, right] = Array.from(line.matchAll(/[A-Z]{3}/g));
    acc[node[0]] = { L: left[0], R: right[0] };
    return acc;
  }, {});
};

const countStepsToZZZ = (instructions, map) => {
  let key = 'AAA';
  let instructionIndex = 0;
  let stepCount = 1;

  while (map[key][instructions[instructionIndex]] !== 'ZZZ') {
    key = map[key][instructions[instructionIndex]];
    stepCount += 1;
    if (instructionIndex !== instructions.length - 1) {
      instructionIndex += 1;
    } else {
      instructionIndex = 0;
    }
  }

  return stepCount;
}

const part1 = (input) => {
  const instructions = input[0];
  const map = buildMap(input.slice(2));
  return countStepsToZZZ(instructions, map);
};

const part2 = (input) => {

};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
