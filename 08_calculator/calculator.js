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
  return Number(finalSum);
};

const multiply = function() {

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
