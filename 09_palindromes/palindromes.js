const palindromes = function (input) {
  let forbidden = [',','.',' ','!'];
  inputToArray = input.split('')
                      .filter((char) => !forbidden.includes(char));
  return inputToArray.join('').toLowerCase() == inputToArray.reverse().join('').toLowerCase();
};


// Do not edit below this line
module.exports = palindromes;
