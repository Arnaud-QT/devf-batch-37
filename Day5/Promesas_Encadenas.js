const axios = require("axios");

function creerUser(user) {
    return axios
        .post("http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/", user)
        .then(result =>{
            return result
        })
        .catch(err =>{
            return err
        })
}

function trouverUser(id) {
    return axios
        .get("http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"+id+"/")
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}

function modifierUser(id, new_data) {
    return axios
        .patch("http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"+id+"/", new_data)
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}

function suppUser(id) {
    return axios
    .delete("http://goodreads-devf-aaron.herokuapp.com/api/v1/authors/"+id+"/")
    .then(result => {
        return result
    })
    .catch(err => {
        return err
    })
}


let new_person = 
{
    name: 'Bob',
    last_name: "Dilan",
    nacionalidad: "MX",
    biography: 'un mec',
    gender: "M",
    age: 24,
}

let new_data = 
{
    name: 'Julien'
}

creerUser(new_person)
.then(({data}) =>{
    console.log("Creacion")
    return trouverUser(data.id)
})
.then(({data}) =>{
    console.log("Modification")
    return modifierUser(data.id, new_data)
})
.then(({data}) =>{
    console.log("Suppresion")
    return suppUser(data.id)
})
.catch(err =>{
    console.log(err)
})