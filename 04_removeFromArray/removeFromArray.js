const removeFromArray = function(array, ...removedValues) {
  let array2 = [];
   for (i = 0; i < removedValues.length; i++) {
    if (array.includes(removedValues[i])) {
      array2.push(removedValues[i]);
   }
   }

   let array3 = [];
   for(i = 0; i < array.length; i++) {
    if(array2.includes(array[i])){
      continue;
    } else {
      array3.push(array[i]);
    }
    }
    return array3;
  };
  


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

//check item by item of array2 against array
//if there is a match, return the item
//remove the returned item from an array
//if there is no match, continue

// Do not edit below this line
module.exports = removeFromArray;
