const express = require("express");
const app = express();
const {Incubator} = require("./models/index")
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// TEST END POINT
app.get("/", (request, response) => {
  response.send("hola mundo");
});


// CREATE INCUBATOR END POINT
app.post("/api/v1/create/incubator", (req, res) => {
  let newIncubator = new Incubator(req.body);

  newIncubator.save((err, response) => {
    !err ? res.status(201).send(response) : res.send(err);
  });
});

// GET ALL ACTIVE INCUBATORS END POINT
app.get("/api/v1/get/all/active", (req, res) => {
  Incubator.find({ is_active : true}, (err, response) => {
    !err ? res.status(200).send(response) : res.send(err);
  });
});

// GET INCUBATOR END POINT
app.get("/api/v1/get/incubator/:incubatorid", (req, res) => {
  Incubator.findById(req.params.incubatorid, (err, response) => {
  !err ? res.status(200).send(response) : res.send(err);
  })
});

//UPDATE INCUBATOR END POINT
app.put("/api/v1/update/incubator/:incubatorid", (req, res) => {
  Incubator.findByIdAndUpdate(
    req.params.incubatorid, 
    { $set: req.body },
    { new: true },
    (err, response)=>{
      !err ? res.status(200).send(response) : res.send(err);
    });
});

// DELETE INCUBATOR END POINT
app.delete("/api/v1/delete/incubator/:incubatorid", (req, res) => {
  Incubator.findByIdAndUpdate(
    req.params.incubatorid,
    { $set: {is_active: false}},
    { new : true },
    (err, response)=>{
      !err ? res.status(200).send(response) : res.send(err);
    });
})

app.listen(3000, err => {
  if (!err) {
    console.log(`Sever on port ${3000}`);
  }
});