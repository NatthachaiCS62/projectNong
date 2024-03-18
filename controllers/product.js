const Product = require('../model/Product');

exports.create = async (req, res) => {
    try {
        const products = await new Product(req.body).save();

        res.status(201).json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error Create Product!!!");
    }
};

exports.list = async (req, res) => {
    try {
        const product = await Product.find()
        res.send(product);
    } catch (err) {
        res.status(500).send("Server Error list Product!!!");
    }
};
