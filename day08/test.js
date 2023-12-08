import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from "../read-input.js";
import { part1 } from "./solution.js";

describe('day08 solution', () => {
  describe('part 1', () => {
    it('should return the correct value using the example input 1', () => {
      const input = readInput('day08/example-input-1');
      const result = part1(input);
      assert.strictEqual(result, 2);
    });

    it('should return the correct value using the example input 2', () => {
      const input = readInput('day08/example-input-2');
      const result = part1(input);
      assert.strictEqual(result, 6);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day08/input');
      const result = part1(input);
      assert.strictEqual(result, 12737);
    });
  });
});
