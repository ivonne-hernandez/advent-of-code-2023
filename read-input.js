import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

/**
 * Returns an array of strings where each element is a line of the text file
 * @param {string} fileName
 * @returns {string[]}
 */
const readInput = (fileName = process.argv[2]) => {
  const directory = dirname(fileURLToPath(import.meta.url));
  const filePath = join(directory, fileName);
  const rawInput = readFileSync(filePath, {encoding:'utf8', flag:'r'});
  return rawInput.split('\n').map(line => line.replaceAll('\r', ''));
};

export default readInput;
