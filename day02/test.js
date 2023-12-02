import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from "../read-input.js";
import { part1, part2 } from "./solution.js";

describe('day02 solution', () => {
  describe('part 1', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day02/example-input-1');
      const result = part1(input);
      assert.strictEqual(result, 8);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day02/input');
      const result = part1(input);
      assert.strictEqual(result, 2685);
    });
  });

  describe('part 2', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day02/example-input-1');
      const result = part2(input);
      assert.strictEqual(result, 2286);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day02/input');
      const result = part2(input);
      assert.strictEqual(result, 83707);
    });
  });
});
