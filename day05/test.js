import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from "../read-input.js";
import { part1 } from "./solution.js";

describe('day05 solution', () => {
  describe('part 1', () => {
    it('should return the correct value using the example input', () => {
      const input = readInput('day05/example-input-1');
      const result = part1(input);
      assert.strictEqual(result, 35);
    });
  });
});
