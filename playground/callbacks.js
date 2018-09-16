// synchronous

// var getUser = (id, callback) => {
//   var user = {
//       id: id,
//       name:'Naya'
//   };
//   callback(user);
// };
// getUser(31, (userObject) => {
//   console.log(userObject);
// });


// Asynchronous

var getUser = (id, callback) => {
  var user = {
      id: id,
      name:'Naya'
  };
  setTimeout(()=>{
    callback(user); 
  }, 3000);
};
getUser(31, (userObject) => {
  console.log(userObject);
});