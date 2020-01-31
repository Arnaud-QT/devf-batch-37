const mongoose = require("mongoose")
const bdUrl = "mongodb+srv://Arnaud:mdpsimple@cluster0-4kyfe.mongodb.net/Store?retryWrites=true&w=majority"
const Product = require('./Product')

mongoose.connect(bdUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
    !err ? console.log(`Connection successfully`) : console.log(err)
})

module.exports = {
    Product
}