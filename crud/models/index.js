const mongoose = require("mongoose")
const bdUrl = "mongodb+srv://Arnaud:simple@cluster0-4kyfe.mongodb.net/Incubators?retryWrites=true&w=majority"
const Incubator = require('./Incubator')

mongoose.connect(bdUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
    !err ? console.log(`Connection successfully`) : console.log(err)
})

module.exports = {
    Incubator
}