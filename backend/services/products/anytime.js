const db = require('../../config/db');

// Add new product
const addProduct = async (product) => {
    const insertQuery = `INSERT INTO anytime_products (name, description, category, sub_category, price, offer, availability) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    await db.query(insertQuery, [
        product.name,
        product.description,
        product.category,
        product.sub_category,
        product.price,
        product.offer,
        product.availability
    ], (err, result) => {
        if (err) throw err;
        console.log('\n DONE BABY RESULTS: => ', result);
    });
};

// Update product
const updateProduct = async (product) => {};

// Delete product
const deleteProduct = async (product) => {};

// Get all products
const getProducts = async (product) => {};

const service = { addProduct, updateProduct, deleteProduct, getProducts };

module.exports = service;