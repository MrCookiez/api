const db = require('../config/db');

const byId = async (id) => {
    const insertQuery = `SELECT * FROM users WHERE id ='${id}';`;

    await db.query(insertQuery, (err, result) => {
        if (err) throw err;
        console.log(result);
        return result;
    });
};

// Get user by email query
const byEmail = async (email) => {
    const insertQuery = `SELECT * FROM users WHERE email ='${email}';`;

    await db.query(insertQuery, (err, result) => {
        if (err) throw err;
        console.log(result);
        return result;
    });
};

const find = { byId, byEmail };

module.exports = find;