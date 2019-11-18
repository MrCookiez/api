const service = require('../services/auth');
const db = require('../config/db');

// Register user
module.exports = register = async (req, res) => {
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email
    };

    try {
        service.register(user);
        if (user) res.send('New user added to the database!');
        res.redirect('/login');
    } catch (error) {
        res.redirect('/register');
    }
};

// Login user
// module.exports = login = (req, res) => {
//};