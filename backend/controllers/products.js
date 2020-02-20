const service = require('../services/products');
const Product = require('../models/Product');

const addProduct = async (req, res) => {
    const product = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        sub_category: req.body.sub_category,
        price: req.body.price,
        offer: req.body.offer,
        availability: req.body.availability
    };

    service.addProduct(product).then(result => res.send(result)).catch(error => error);
};

// Get all products
const getProducts = (req, res) =>
    Product.findAll()
    .then(products => res.send(products))
    .catch(error => console.log(error));

// Delete product
// Update product

const controllers = { addProduct, getProducts };

module.exports = controllers;
