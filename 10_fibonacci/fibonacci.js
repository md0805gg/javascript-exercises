const fibonacci = function(number) {
  arrayForSequence = [];
  for (let i = 0; i <= number; i++) {
    arrayForSequence.push(i);
  }
  numbersForSequence = arrayForSequence.slice(-3,-1);
  finalNumber = numbersForSequence.reduce((sum, current) => sum + current, 0);
  return finalNumber;
};

// Do not edit below this line
module.exports = fibonacci;
