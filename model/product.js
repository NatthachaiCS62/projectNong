const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(

    {
        productCode: {
            type: Number,
        },
        date: {
            type: String,
        },
        shippingAddress: {
            type: String,
        },
        productName: {
            type: String,
            text: true,
        },
        quantity: {
            type: Number,
            default: 0
        }
    },
);

module.exports = mongoose.model("product", productSchema);