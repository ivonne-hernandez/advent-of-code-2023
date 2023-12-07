import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from "../read-input.js";
import { part1, part2 } from "./solution.js";

describe('day07 solution', () => {
  describe('part 1', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day07/example-input-1');
      const result = part1(input);
      assert.strictEqual(result, 6440);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day07/input');
      const result = part1(input);
      assert.strictEqual(result, 247823654);
    });
  });

  describe('part 2', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day07/example-input-1');
      const result = part2(input);
      assert.strictEqual(result, 5905);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day07/input');
      const result = part2(input);
      assert.strictEqual(result, 245461700);
    });
  });
});
