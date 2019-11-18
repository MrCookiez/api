const db = require('../config/db');
const bcrypt = require('bcrypt');
const find = require('./findUserBy');

const localStrategy = require('passport-local').Strategy;

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
const login = async (passport, user) => {
    // const authenticateUser = async (email, password, done) => {
    //     const foundUser = find.byEmail(email);
    //     if (foundUser == null) done(null, false, { message: 'No user found with this email' });

    //     try {
    //         if ( await bcrypt.compare(password, user.password)) {
    //             done(null, foundUser);
    //         } else {
    //             done(null, false, { message: 'Incorrect password' });
    //         }
    //     } catch (error) {
    //         return done(error);
    //     }
    // };

    // passport.use(new localStrategy({ usernameField: 'email'}, authenticateUser));
    // passport.serializeUser((user, done) => done(null, user.id));
    // passport.deserializeUser((id, done) => done());
};

const service = { register, login };

module.exports = service;

// Login user
// module.exports = login = (req, res) => {
//     res.body
// };