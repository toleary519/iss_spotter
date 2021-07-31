const request = require('request-promise-native');

const fetchMyIP2 = function() {
  return request('https://api.ipify.org?format=json')
}

const fetchCoordsByIP2 = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchFlyOverTimes2 = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};
const nextTimesForMyLocation2 = function() {
  return fetchMyIP2()
    .then(fetchCoordsByIP2)
    .then(fetchFlyOverTimes2)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};



module.exports = { fetchMyIP2, fetchCoordsByIP2, fetchFlyOverTimes2, nextTimesForMyLocation2 };