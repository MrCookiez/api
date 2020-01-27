const db = require('../config/db');
const Product = require('../models/Product');

// Add new product
const addProduct = (product) => {
    Product.create({
        name: product.name,
        description: product.description,
        category: product.category,
        sub_category: product.sub_category,
        price: product.price,
        offer: product.offer,
        availability: product.availability
    })
    .then(result => console.log(result))
    .catch(error => console.log(error))
};

// Get all products
const getProducts = () => {
    Product.findAll()
    .then(products => products)
    .catch(error => console.log(error))
};

// Update product
const updateProduct = (product) => {};

// Delete product
const deleteProduct = (product) => {};

const service = { addProduct, getProducts, updateProduct, deleteProduct };

module.exports = service;