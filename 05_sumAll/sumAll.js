const sumAll = function(start,end) {
  let FinalNumber = 0;
  if (typeof(start) !=='number' || typeof(end) !== 'number') {
    return 'ERROR'
  }
  else if (end < 0 || start < 0) {
    return 'ERROR'
  }
  else if (end < start) {
    for (end; end <= start; end++) {
      FinalNumber += end;
  }
  } else {
    for (start; start <= end; start++) {
      FinalNumber += start;
  };
};
  return FinalNumber;
};

// Do not edit below this line
module.exports = sumAll;

//Think about how you would do this on pen and paper and then how you might translate that process into code:
//- make sure you pay attention to the function parameters
//- create a variable to hold the final sum
//- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
//- on each iteration add the number to the sum
//- return the sum after finishing the loop

