const axios = require("axios");

function deleteAutor(id) {

    axios
        .delete("https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"+id+"/")
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err)
        })
}

deleteAutor(3888);