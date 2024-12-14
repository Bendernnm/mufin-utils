const { parseTransactions } = require('../../../../utils');
const onlyLast4DigitsMapper = require('./onlyLast4Digits.map');
const cardsStatReducer = require('./cardsStat.reducer');

module.exports = async function (csvFilePath, onlyLast4Digits) {
  const [transactions] = await parseTransactions(csvFilePath);

  const cardsStat = transactions.reduce(cardsStatReducer, {
    cards: {},
    meta: { cardsCount: 0, transactionsCount: 0 },
    total: { expenses: 0, income: 0 }
  });

  if (onlyLast4Digits) {
    cardsStat.cards = onlyLast4DigitsMapper(cardsStat.cards);
  }

  return cardsStat;
};
