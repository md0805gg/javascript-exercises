const findTheOldest = function(array) {
  let objectWithAge = array.map((item) => 
     ({
      name: item.name,
      age: item.yearOfDeath - item.yearOfBirth
    })
  );
  return greatestAge = objectWithAge.reduce((previous, current) =>  
  previous.age > current.age ? previous : current
  );
};
 

// Do not edit below this line
module.exports = findTheOldest;
