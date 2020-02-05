const axios = require("axios");

function createIncubator(incubator) {
    return axios
        .post("mongodb+srv://Arnaud:mdpsimple>@cluster0-4kyfe.mongodb.net/Incubator?retryWrites=true&w=majority", incubator)
        .then(result =>{
            return result
        })
        .catch(err =>{
            return err
        })
}

function trouverUser(id) {
    return axios
        .get("mongodb+srv://Arnaud:mdpsimple>@cluster0-4kyfe.mongodb.net/Incubator?retryWrites=true&w=majority"+id)
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}

function modifierUser(id, new_data) {
    return axios
        .patch("mongodb+srv://Arnaud:mdpsimple>@cluster0-4kyfe.mongodb.net/Incubator?retryWrites=true&w=majority"+id, new_data)
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}

function suppUser(id) {
    return axios
    .delete("mongodb+srv://Arnaud:mdpsimple>@cluster0-4kyfe.mongodb.net/Incubator?retryWrites=true&w=majority"+id)
    .then(result => {
        return result
    })
    .catch(err => {
        return err
    })
}


let new_incubator = 
{
    name: '500 Startup',
    creation: 2012,
    kind: "Accelerator",
    origin: 'Mexico',
    is_active: true,
}

let new_data = 
{
    name: '600 Startup'
}

createIncubator(new_incubator)
.then(({data}) =>{
    console.log("Creating Incubator")
    return trouverUser(data.id)
})
.then(({data}) =>{
    console.log("Modification")
    return modifierUser(data.id, new_data)
})
.then(({data}) =>{
    console.log("Deleting")
    return suppUser(data.id)
})
.catch(err =>{
    console.log(err)
})