const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["Hogar", "Ropa"],
        required: true
    },
    vendor: String,
    origin: {
        type: String,
        default: "Medellin"
    }
})


const Product = mongoose.model("Product", productSchema)

module.exports = Product;




// const body = {
//     name: "Jean",
//     price: 4567,
//     category: Hogar,
//     vendor: "Pierre",
//     origin: "China"
// }