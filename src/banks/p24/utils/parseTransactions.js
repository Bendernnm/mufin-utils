const xlsx2json = require("xlsx2json");

module.exports = function parseXlsx(csvFilePath) {
  return xlsx2json(csvFilePath, {
    dataStartingRow: 3,
    mapping: {
      'date': 'A',
      'category': 'B',
      'cardNumber': 'C',
      'opDesc': 'D',
      'cardPrice': 'E',
      'cardCurrency': 'F',
      'transactionPrice': 'G',
      'transactionCurrency': 'H',
      'remainingFunds': 'I',
      'remainingFundsCurrency': 'J',
    }
  });
};
