import readInput from "../read-input.js";

const cardValues = {
  'A': 14,
  'K': 13,
  'Q': 12,
  'J': 11,
  'T': 10,
  '9': 9,
  '8': 8,
  '7': 7,
  '6': 6,
  '5': 5,
  '4': 4,
  '3': 3,
  '2': 2,
};

const calculateHandValue = (cardCounts) => {
  const isFive = Object.values(cardCounts).includes(5);
  const isFour = Object.values(cardCounts).includes(4);
  const isFull = Object.values(cardCounts).includes(3) && Object.values(cardCounts).includes(2);
  const isThree = Object.values(cardCounts).includes(3) && !Object.values(cardCounts).includes(2);
  const pairCounts = Object.values(cardCounts).filter((count) => count === 2);
  const isTwoPair = pairCounts.length === 2;
  const isOnePair = pairCounts.length === 1 && !isFull;
  if (isFive) return 7;
  if (isFour) return 6;
  if (isFull) return 5;
  if (isThree) return 4;
  if (isTwoPair) return 3;
  if (isOnePair) return 2;
  return 1;
};

const part1 = (input) => {
  const hands = input.map(line => {
    const [cardsString, bet] = line.split(' ');
    const cards = cardsString.split('');
    const cardCounts = {};
    cards.forEach(card => {
      if (!cardCounts[card]) {
        cardCounts[card] = 0;
      }
      cardCounts[card] += 1;
    });
    return { cards, bet: Number(bet), handValue: calculateHandValue(cardCounts) };
  });
  const sortedHands = hands.toSorted((a, z) => {
    if (a.handValue > z.handValue) return 1;
    if (a.handValue < z.handValue) return -1;
    for (let i = 0; i < 5; i++) {
      if (cardValues[a.cards[i]] > cardValues[z.cards[i]]) return 1;
      if (cardValues[a.cards[i]] < cardValues[z.cards[i]]) return -1;
    }
    return 0;
  });
  return sortedHands.reduce((total, hand, i) => {
    return total + (hand.bet * (i + 1));
  }, 0);
};

const part2 = (input) => {

};

if (process.env.NODE_ENV !== 'test') {
  console.log('Part 1 solution:', part1(readInput()));
  console.log('Part 2 solution:', part2(readInput()));
}

export { part1, part2 };
