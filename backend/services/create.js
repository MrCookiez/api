const db = require('../config/db');

// Create products table
const create = async (table) => {
    let insertQuery = `CREATE TABLE ${table.shopName}_products(id int AUTO_INCREMENT, name CHAR(255), description CHAR(255), category CHAR(255), sub_category CHAR(255), price DECIMAL(65), offer tinyint(1), availability tinyint(1), PRIMARY KEY(id))`;
    db.query(insertQuery, (err, result) => {
        if (err) throw err;
        console.log('\n DONE BABY RESULTS: => ', result);
        res.send(`${table.shopName}_products_products table has been created...`);
    });
};

const service = { create };

module.exports = service;
