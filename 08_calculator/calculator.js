const add = function(a,b) {
  return a + b	
};

const subtract = function(a,b) {
	return a - b
};

const sum = function([...numbers]) {
  let finalSum = 0;
  for(let i = 0; i < numbers.length; i++) {
    finalSum += numbers[i];
  }
  return finalSum;
};
//BEFORE STARTING WITH MULTIPLY, TRY TO UNDERSTAND WHY DID I HAVE TO MAKE AN ARRAY OF ...NUMBERS REST PARAMETER, INSTEAD OF JUST ...NUMBERS PARAMETER
const multiply = function([...numbers]) {
  return numbers.reduce((multiplied, current) => multiplied * current, 1)
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
