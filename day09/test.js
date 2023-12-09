import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from '../read-input.js';
import { part1, part2 } from './solution.js';

describe('day09 solution', () => {
  describe('part 1', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day09/example-input-1');
      const result = part1(input);
      assert.strictEqual(result, 114);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day09/input');
      const result = part1(input);
      assert.strictEqual(result, 1637452029);
    });
  });

  describe('part 2', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day09/example-input-1');
      const result = part2(input);
      assert.strictEqual(result, 2);
    });

    it('should return the correct value using the puzzle input', () => {
      const input = readInput('day09/input');
      const result = part2(input);
      assert.strictEqual(result, 908);
    });
  });
});
