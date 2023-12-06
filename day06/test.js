import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from "../read-input.js";
import { part1, part2 } from "./solution.js";

describe('day06 solution', () => {
  describe('part 1', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day06/example-input-1');
      const result = part1(input);
      assert.strictEqual(result, 288);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day06/input');
      const result = part1(input);
      assert.strictEqual(result, 211904);
    });
  });

  describe('part 2', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day06/example-input-1');
      const result = part2(input);
      assert.strictEqual(result, 71503);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day06/input');
      const result = part2(input);
      assert.strictEqual(result, 43364472);
    });
  });
});
