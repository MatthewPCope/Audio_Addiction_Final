const mongoose = require("mongoose");
const LotterySchema = new mongoose.Schema(
    {
    brand: { type: String,
        required: [true, "Brand is required"],
        minlength: [2, "Brand must be at least 2 characters long"] },
    model: { type: String,
        required: [true, "Model is required"],
        minlength: [3, "Model must be at least 3 characters long"]},
    price: { type: Number,
        required: [true, "Price is required"]},
    thoughts: { type: String},
    userId:{
        type: String
    }
    }, 
    { timestamps: true }
);



const Lottery = mongoose.model("Lottery", LotterySchema);

module.exports = Lottery;