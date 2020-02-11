const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const {NonProfit} = require("./Models/index");
const cors = require("cors");

app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(cors());