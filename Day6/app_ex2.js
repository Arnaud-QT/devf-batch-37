const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/api/suma", (request, response) => {
    let {num1, num2} = request.query
    num1 = Number(num1)
    num2 = Number(num2)
    response.status(200).send({'Resultado': num1+num2})
});

app.listen(3000, err => {
    if(!err){
        console.log(`Server on port: ${3000}`);
    }
});