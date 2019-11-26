var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../../config/db');
const findEmail = require('../findUser').byEmail;
const findPassword = require('../findUser').getPasswordByEmail;
const bcrypt = require('bcrypt');

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
            });
        }
        // @TODO: Need to add 'else' case which will display an error message
    });
};

// Authenticate - Login user
const login = async (passport, user) => {
    const dbEmail = findEmail(user.email);

    if (dbEmail === null) done(null, false, console.log('No user found'))

    const dbPassword = findPassword(dbEmail);

    try {
        if (await bcrypt.compare(dbPassword, user.password)) {
            console.log('user => => =>', user)
            return done(null, user)
        } else {
            console.log('Password incorrect');
            return done(null, false, 'Password incorrect');
        }
    } catch (error) {
        console.log('<== ERROR - ERROR - ERROR ==>');
        return done(error);
    }
};

const service = { register, login };

module.exports = service;


// passport.use(new LocalStrategy(
//     function(username, password, done) {
//       User.findOne({ username: username }, function(err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     }
//   ));