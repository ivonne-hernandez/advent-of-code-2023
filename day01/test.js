import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from "../read-input.js";
import { part1 } from "./solution.js";

describe('day01 solution', () => {
  describe('part 1', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day01/example-input-1');
      const result = part1(input);
      assert.strictEqual(result, 142);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day01/input');
      const result = part1(input);
      assert.strictEqual(result, 55816);
    });
  });

  // describe('part 2', () => {
  //   it('should return the correct value using the example input', () => {
  //     const input = readInput('day01/example-input-2');
  //     const result = part2(input);
  //     assert.strictEqual(result, 281);
  //   });

  //   it('should return the correct value using the puzzle input', () => {
  //     const input = readInput('day01/input');
  //     const result = part2(input);
  //     assert.strictEqual(result, 55260);
  //   });
  // });
});
