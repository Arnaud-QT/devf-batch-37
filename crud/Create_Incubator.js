const axios = require("axios");

function createIncubator (incubator) {

    axios
        .post("/api/v1/incubators", incubator)
        .then(result => {
            return result;
       })
       .catch(err => {
         return err;
       });
}

let new_incubator = 
{
    name: '500 Startup',
    creation: 2012,
    kind: "Accelerator",
    origin: 'Mexico',
    is_active: true,
}

createIncubator(new_incubator)