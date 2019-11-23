const db = require('../config/db');
const bcrypt = require('bcrypt');
const find = require('./findUserBy');
const localStrategy = require('passport-local').Strategy;

// Register user
const register = async (user) => {
    const insertQuery = "SELECT * FROM users WHERE email = ? ";

    await db.query(insertQuery, [user.email], async (err, rows, result) => {
        if (err) throw err;
        console.log(result);

        if (!rows.length) {
            const insertQuery = "INSERT INTO users (firstname, lastname, password, email) VALUES (?, ?, ?, ?)";
            const hashedPassword = await bcrypt.hash(user.password, 10);

            await db.query(insertQuery, [user.firstname, user.lastname, hashedPassword, user.email], (err, result) => {
                if (err) throw err;
                console.log('\n DONE BABY RESULTS: => ', result);
                console.log('\n DONE BABY ROWS: => ', rows);
            });
        } else {
            console.log('\n This email not valid! ROWS: => ', rows);
        }
    });
};

// Authenticate - Login user
const login = async (passport, user) => {
    await db.query("SELECT * FROM users WHERE email = ? ", [user.email], (err, result) => {
        if (err) throw err;
        console.log(result);
        return result;
    });
};

const service = { register, login };

module.exports = service;
