module.exports = function (cards) {
  const cardsOnly4Digits = {};
  const cartsNumbers = Object.keys(cards);

  for (let i = 0, length = cartsNumbers.length; i < length; i += 1) {
    const cardNumber = cartsNumbers[i];

    cardsOnly4Digits[cardNumber.slice(-4)] = cards[cardNumber];
  }

  return cardsOnly4Digits;
};
