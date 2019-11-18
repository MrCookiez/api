const db = require('../config/db');

const byId = async (id) => {
    const insertQuery ="SELECT * FROM users WHERE id = ? ";

    await db.query(insertQuery, [id], (err, result) => {
        if (err) throw err;
        console.log(result);
        return result;
    });
};

// Get user by email query
const byEmail = async (email) => {
    const insertQuery ="SELECT * FROM users WHERE email = ? ";

    await db.query(insertQuery, [email], (err, result) => {
        if (err) throw err;
        console.log(result);
        return result;
    });
};

const find = { byId, byEmail };

module.exports = find;