const axios = require("axios");

function createPerson (person) {

    axios
        .post("http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/", person)
        .then(result => {
            console.log(result);
       })
       .catch(err => {
         console.log(err);
       });
}

let new_person = 
{
    name: 'Robert',
    last_name: "Jr",
    nacionalidad: "MX",
    biography: 'un mec',
    gender: "M",
    age: 24,
}

createPerson(new_person)