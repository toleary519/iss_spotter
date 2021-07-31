

// const { fetchMyIP2 } = require('./iss_promised');
// const { fetchCoordsByIP2 } = require('./iss_promised');
// const { fetchFlyOverTimes2 } = require('./iss_promised')
const { nextTimesForMyLocation2 } = require('./iss_promised');

// fetchMyIP2()
//   .then(fetchCoordsByIP2)
//   .then(fetchFlyOverTimes2)
//   .then(body => console.log(body));
nextTimesForMyLocation2()
  .then((bazookaBuns) => {
    console.log(bazookaBuns);

  })
  .catch((error) => {
    console.log('ERROR:', error.message);
  });



