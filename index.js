// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

// fetchCoordsByIP((error, coords) => {
//   if (error) {
//     console.log("Coord Error", error);
//     return;
//   }

//   console.log('It worked! Returned Coords:', coords);
// });