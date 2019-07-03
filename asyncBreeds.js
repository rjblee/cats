// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    console.log('Callback: I have the data!');
    if (!error) { 
      return callback(data);
    } else {
      return callback(undefined);
    }
  });
  
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so this function returns undefined.
}

const printData = function (data) {
  console.log('Return Value: ', data);
}

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', printData);

// breedDetailsFromFile("Bombay");
module.exports = breedDetailsFromFile

// (data) => {console.log('Return Value: ', data) // => will NOT print out details, instead we will see undefined!
// }