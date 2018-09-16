const request = require('request');

var getWeather = (lat, lng, callback) => {
request({
url: `https://api.darksky.net/forecast/0b2c899a975f38cefa915b8b5a96fa74/${lat},${lng}`,
  json: true
}, (error, response, body) => {
  
  if (!error && response.statusCode === 200) {
    // console.log(`Temperature: ${body.currently.temperature}`);
    callback(undefined ,{
        Temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature

    });
  } else {
    // console.log('Unable to fetch weather');
    callback('Unable to fetch weather');
  }

});

}


module.exports.getWeather =  getWeather;