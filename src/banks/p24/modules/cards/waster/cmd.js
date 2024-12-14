const waster = require('./lib');

const [, , only4Digits = 0, csvPath= './file.xlsx'] = process.argv;

(async () => {
  try {
    const result = await waster(csvPath, !!+only4Digits);

    console.log(result);

    return result;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();