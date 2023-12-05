import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from "../read-input.js";
import { part1, part2 } from "./solution.js";

describe('day05 solution', () => {
  describe('part 1', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day05/example-input-1');
      const result = part1(input);
      assert.strictEqual(result, 35);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day05/input');
      const result = part1(input);
      assert.strictEqual(result, 88151870);
    });
  });

  describe('part 2', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day05/example-input-1');
      const result = part2(input);
      assert.strictEqual(result, 46);
    });

    // it('should return the correct value using the puzzle input', () => {
    //   const input = readInput('day05/input');
    //   const result = part2(input);
    //   assert.strictEqual(result, 2008785);
    // });
  });
});
