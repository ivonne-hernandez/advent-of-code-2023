import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from "../read-input.js";
import { part1, part2 } from "./solution.js";

describe('day04 solution', () => {
  describe('part 1', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day04/example-input-1');
      const result = part1(input);
      assert.strictEqual(result, 13);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day04/input');
      const result = part1(input);
      assert.strictEqual(result, 23941);
    });
  });

  describe('part 2', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day04/example-input-1');
      const result = part2(input);
      assert.strictEqual(result, 30);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day04/input');
      const result = part2(input);
      assert.strictEqual(result, 5571760);
    });
  });
});
