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

// Authenticate - Login user
const login = async (passport, user) => {

    const authenticateUser = async (email, password, done) => {
        // const foundUser = find.byEmail(email);

        // if (foundUser == null) done(null, false, { message: 'No user found with this email' });

        await db.query("SELECT * FROM users WHERE email = ? ", [email],
        function(err, rows){
            if(err)
            return done(err);
            if(!rows.length){
            return done(null, false, req.flash('loginMessage', 'No User Found'));
            }
            if(!bcrypt.compare(password, rows[0].password))
            return done(null, false, req.flash('loginMessage', 'Wrong Password'));

            console.log('DONE', rows[0]);
            return done(null, rows[0]);
        });
    };

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true }),
        authenticateUser(user.email, user.password)
    );

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => done(find.byId(id)));
};

const service = { register, login };

module.exports = service;
