const axios = require("axios");
//const request = require("request");

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         request.get(
//             "http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/",
//             (err, result) => {
//                 if (result.statusCode !== 200) {
//                     reject(err);
//                 } else {
//                     resolve(JSON.parse(result.body));
//                 }
//             }
//         );
//     });

// } getUsers()
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//     });

    axios
      .get("http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/3888")
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });