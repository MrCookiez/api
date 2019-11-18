const express = require('express');

const register = require('../controllers/auth');
const login = require('../controllers/auth');

const router = express.Router();

router.post('/', register);
router.post('/', login);

module.exports = router;

