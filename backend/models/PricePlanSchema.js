// app.js
const mongoose = require("mongoose");

const PricePlanSchema = new mongoose.Schema({
  valid_from: {
    type: Date,
  },
  valid_to: {
    type: Date,
  },
  items: [
    {
      category: String,
      name: String,
      half_price: Number,
      full_price: Number,
      extra_charge: Number,
    },
  ],
});

module.exports = new mongoose.model("Plan", PricePlanSchema);
