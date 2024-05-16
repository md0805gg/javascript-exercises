const fibonacci = function(number) {
  arrayForSequence = [];
  if (number < 0) {
    return 'OOPS'
  } else if (number == 1) {
    return 1;
  } else {
    for (let i = 1; i <= number; i++) {
      if (i == 1) {
        arrayForSequence.push(1);
      } else {
        c = arrayForSequence.slice(-2)
                            .reduce((sum,current) => sum + current);
        arrayForSequence.push(c);
      }
    }
    numbersForSequence = arrayForSequence.slice(-3,-1);
    finalNumber = numbersForSequence.reduce((sum, current) => sum + current, 0);
    return finalNumber;
  }
};

// Do not edit below this line
module.exports = fibonacci;
