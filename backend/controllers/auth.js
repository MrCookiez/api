const passport = require('passport');
const service = require('../services/user/auth');

// Register user
const register = async (req, res) => {
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    };

    try {
        service.register(user);
        res.redirect('/login');
    } catch (error) {
        res.redirect('/register');
    }
};

// Login user
const login = async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    };

    service.login(passport, user);
};

const controllers = { login, register };

module.exports = controllers;