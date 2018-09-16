const request = require('request');

var gecodeAddress = (address, callback) => {

var encodedAddress = encodeURIComponent(address);

request({
          url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
          json: true
}, (error, response, body) => {
    if (error) {
      //  console.log('Unable to connect to Goolgle server');
      callback('Unable to connect to Goolgle server');
    } else if (body.status === 'ZERO_RESULTS'){
      // console.log('Unable to find that address');
      callback('Unable to find that address');

    } else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude:body.results[0].geometry.location.lng
      });

    }
    
}); 

}


module.exports.gecodeAddress = gecodeAddress;
















// // var Address = '1301 lombard street pheladelphia';
// // var encodingAddress = encodeURIComponent(Address);
// // var decodingAddress = decodeURIComponent(Address);

// var encodedAddress = encodeURIComponent(argv.address)

// request({
//           // url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+street+pheladilphia&key=AIzaSyCtOFFPlM1TEZyjxH_eieP-lFLf-9dnrcw',
//           // url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20pheladilphia',
//           // url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodingAddress}`,
//           url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
//           json: true
//            // , proxy: '127.0.0.1:8080'
//          // , rejectUnauthorized: false
// }, (error, response, body) => {
//     //  console.log(JSON.stringify(response, undefined, 2));
//     //  console.log('error', error);
//     //  console.log('response', response);
//     //  console.log('body', body);


//     if (error) {
//        console.log('Unable to connect to Goolgle server');
//     } else if (body.status === 'ZERO_RESULTS'){
//       console.log('Unable to find that address');
//     } else if (body.status === 'OK'){
//       console.log(`Address: ${body.results[0].formatted_address}`);
//       console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
//       console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
//     }
    
// });   