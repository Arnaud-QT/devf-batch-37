const axios = require("axios");

function modifID (id, modif) {

    axios
        .patch("https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"+id+"/", modif)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });

}

let modif = {
    name: 'Pierre'
}

modifID(3821, modif);