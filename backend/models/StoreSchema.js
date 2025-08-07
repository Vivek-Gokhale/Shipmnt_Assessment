// app.js
const mongoose = require('mongoose');


const StoreSchema = new mongoose.Schema({
    store_location: {
        type: String,
        require: true
    },
    currency: {
        type: String,
    },
    tax_percentage: Number,
    premium_items: [String],
    pricing_plan: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plan'
    },
})

module.exports = new mongoose.model("Store", StoreSchema)
