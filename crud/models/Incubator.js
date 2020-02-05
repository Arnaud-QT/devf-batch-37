const mongoose = require("mongoose");

const incubatorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creation: {
        type: Number,
        required: true
    },
    kind: {
        type: String,
        enum: ["Incubator", "Accelerator"],
        required: true
    },
    origin: {
        type: String,
        default: "Colombia"
    },
    is_active: {
        type: Boolean,
        default: true
    }
}, {timestamps: true});


const Incubator = mongoose.model("Incubator", incubatorSchema)

module.exports = Incubator;
