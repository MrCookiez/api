const db = require('../config/db');
const bcrypt = require('bcrypt');

// Register user
const register = async (user) => {
    const insertQuery = "INSERT INTO users (firstname, lastname, password, email) VALUES (?, ?, ?, ?)";
    const hashedPassword = await bcrypt.hash(user.password, 10);

    await db.query(insertQuery, [user.firstname, user.lastname, hashedPassword, user.email], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
};

// Login user
// const login = async (user) => {
//     if (err) throw err;
//     console.log(result);
//     // res.send('New user added to the database!');
// };

const service = { register };

module.exports = service;

// Login user
// module.exports = login = (req, res) => {
//     res.body
// };