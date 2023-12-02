import { describe, it } from 'node:test';
import assert from 'node:assert';
import readInput from "../read-input.js";
import { part1 } from "./solution.js";

describe('day02 solution', () => {
  it('should return the correct value using the part 1 example input', () => {
    const input = readInput('day02/example-input-1');
    const result = part1(input);
    assert.strictEqual(result, 8);
  });
});
