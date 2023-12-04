import readInput from "../read-input.js";

const countNumberOfWins = (card) => {
  const matches = card.replaceAll(/ +/g, ' ').match(/Card \d+: ((?:\d+ +)+)\| ((?:\d+ )+\d+)/);
  const winningNumbers = matches[1].split(' ').filter(num => num !== '').map(num => Number(num));
  const myNumbers = matches[2].split(' ').filter(num => num !== '').map(num => Number(num));
  return myNumbers.filter(num => winningNumbers.includes(num)).length;
}

const calculateCardValue = (card) => {
  const winCount = countNumberOfWins(card);
  if (!winCount) return 0;
  return 2 ** (winCount - 1);
};

const part1 = (input) => {
  return input.reduce((sum, card) => sum + calculateCardValue(card), 0);
};

const part2 = (input) => {

};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
