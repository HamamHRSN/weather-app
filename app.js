// console.log('Starting app.js');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

var argv = yargs
  .options({
       a:{
         demand: true,
         alias:'address',
         describe: 'Address to fetch weather for',
         string: true
       }
      
  })
  .help()
  .alias('help', 'h')
  .argv;

// console.log(argv);



geocode.gecodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
    
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
        
      } else {
        console.log(`It's Currently: ${weatherResults.Temperature}. it feel like: ${weatherResults.apparentTemperature}.`);
      }
      });
    
  }
});



// geocode.gecodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//       console.log(errorMessage);
      
//     } else {
//       console.log(JSON.stringify(results, undefined, 2));
      
//     }
// });

// weather.getWeather(59.6272009, 17.8578138, (errorMessage, weatherResults) => {
//   if (errorMessage) {
//     console.log(errorMessage);
    
//   } else {
//     console.log(JSON.stringify(weatherResults, undefined, 2));
//   }
// });


// 0b2c899a975f38cefa915b8b5a96fa74

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]


// https://api.darksky.net/forecast/0b2c899a975f38cefa915b8b5a96fa74/37.8267,-122.4233



// const request = require('request');

// request({
//   url: 'https://api.darksky.net/forecast/0b2c899a975f38cefa915b8b5a96fa74/59.6272009,17.8578138',
//   json: true
// }, (error, response, body) => {
//   // if (error) {
//   //          console.log('Unable to connect to Forecast.io server');
//   //       } else if (response.statusCode === 404) {
//   //         console.log('Unable to fetch weather');
          
//   //       }else if (response.statusCode === 200) {
//   //         // console.log('Body', body);
//   //         console.log(`Temperature: ${body.currently.temperature}`);
          
//   //       }
  
//   if (!error && response.statusCode === 200) {
//     console.log(`Temperature: ${body.currently.temperature}`);
//   } else {
//     console.log('Unable to fetch weather');
//   }

// });