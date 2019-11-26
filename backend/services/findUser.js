const db = require('../config/db');

const byId = async (id) => {
    const insertQuery ="SELECT * FROM users WHERE id = ? ";

    await db.query(insertQuery, [id], (err, result) => {
        if (err) throw err;
        return result;
    });
};

// Get user by email query
const byEmail = async (email) => {
    const insertQuery ="SELECT * FROM users WHERE email = ? ";

    await db.query(insertQuery, [email], (err, result) => {
        if (err) throw err;
        return result;
    });
};

// Get user by email query
const getPasswordByEmail = async (email) => {
    const insertQuery = "SELECT email FROM users WHERE email = ? ";
    await db.query(insertQuery, [email], (err, result, fields) => {
        if (err) throw err;
        console.log('fields', fields);
        return result;
    });
};

const find = { byId, byEmail, getPasswordByEmail };

module.exports = find;