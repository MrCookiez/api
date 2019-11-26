const db = require('../config/db');

// Add new product
const addProduct = async (
    shopName, product) => {
    const insertQuery = `INSERT INTO ${shopName} (title, lastname, password, email) VALUES (?, ?, ?, ?)`;

    await db.query(insertQuery, [user.firstname, user.lastname, hashedPassword, user.email], (err, result) => {
        if (err) throw err;
        console.log('\n DONE BABY RESULTS: => ', result);
        console.log('\n DONE BABY ROWS: => ', rows);
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