const db = require('../../config/db');
const shopName = 'anytime';

// Add new product
const addProduct = async (product) => {
    const insertQuery = `INSERT INTO ${shopName}_products (name, description, category, sub_category, price, offer, availability) VALUES (?, ?, ?, ?, ?, ?, ?)`;
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
        return result;
    });
};

// Get all products
const getProducts = async () => {
    const insertQuery = `SELECT * FROM ${shopName}_products`;
    const check = await db.query(insertQuery, (err, result, rows) => {
        if (err) throw err;
        console.log('rows ====>', JSON.stringify(result));
        return JSON.stringify(result);
    });
    return check;
};

// Update product
const updateProduct = async (product) => {};

// Delete product
const deleteProduct = async (product) => {};

const service = { addProduct, updateProduct, deleteProduct, getProducts };

module.exports = service;