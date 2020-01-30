const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/api/usario", (request, response) => {
    let {usario} = request.query
    response.status(200).send({'Usario': usario})
});

app.listen(3000, err => {
    if(!err){
        console.log(`Server on port: ${3000}`);
    }
});