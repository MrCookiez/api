const express = require('express');

const register = require('../controllers/auth');
// const login = require('../controllers/auth');

const router = express.Router();

router.post('/', register);
// router.post('/', (req, res) => res.send('OK'));


module.exports = router;

