const reverseString = function(string) {
  let stringReversed = ''
  for(i = -1; i >= (string.length) * (-1); i--) {
    stringReversed += string.at(i);
    }
  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
