const db = require('../../config/db');
const shopName = 'anytime';
const q = require('q');

const deferred = q.defer();

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
        if (err) throw deferred.reject(err)
        deferred.resolve(result);
});
    return  deferred.promise;
};

// Get all products
const getProducts = async () => {
    await db.query(`SELECT * FROM ${shopName}_products`, (err, result) => {
        if (err) throw deferred.reject(err)
        deferred.resolve(result);
    });
    return deferred.promise;
};

// Update product
const updateProduct = async (product) => {};

// Delete product
const deleteProduct = async (product) => {};

const service = { addProduct, getProducts, updateProduct, deleteProduct };

module.exports = service;