const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/api/", (request, response) => {
    response.sendStatus(200)
    response.sendjson({'mensaje':'hola mundo'})
});

app.listen(3000, err => {
    if (!err) {
      console.log(`Sever on port ${3000}`);
    }
  });