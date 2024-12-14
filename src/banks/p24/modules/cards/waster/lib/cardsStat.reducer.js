module.exports = (accumulator, { cardNumber, cardPrice }) => {
  const price = parseFloat(cardPrice) * 100;
  const opType = price < 0 ? 'expenses' : 'income';

  if (!accumulator.cards.hasOwnProperty(cardNumber)) {
    accumulator.cards[cardNumber] = { expenses: 0, income: 0 };
    accumulator.meta.cardsCount += 1;
  }

  accumulator.total[opType] += price;
  accumulator.cards[cardNumber][opType] += price;
  accumulator.meta.transactionsCount += 1;

  return accumulator;
};
