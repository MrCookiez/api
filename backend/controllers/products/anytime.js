const service = require('../../services/products/anytime');

// Add new product
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

    try {
        await service.addProduct(product)
        .then(
            res.send('New product successfully added!')
        ),
        (error) => res.send(error);
    } catch (error) {
        res.redirect('/register');
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        await service.getProducts()
        .then(result => res.send(result)),
        (error) => res.send(error);
    } catch (err) {
        res.redirect('/register');
    }
};

const controllers = { addProduct, getProducts };

module.exports = controllers;
