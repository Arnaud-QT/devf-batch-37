const axios = require("axios");

function readID (id) {

    axios
        .get("https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"+id)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });

}

readID(3821);