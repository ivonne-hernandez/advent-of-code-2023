import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const readInput = () => {
  const directory = dirname(fileURLToPath(import.meta.url));
  const fileName = process.argv[2];
  const filePath = join(directory, fileName);
  const rawInput = readFileSync(filePath, {encoding:'utf8', flag:'r'});
  return rawInput.split('\n').map(line => line.replaceAll('\r', ''));
};

export default readInput;
