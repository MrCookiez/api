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
        service.addProduct(product)
        res.redirect('/products');
    } catch (error) {
        res.redirect('/register');
    }
};

const controllers = { addProduct };

module.exports = controllers;