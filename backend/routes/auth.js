const express = require('express');
const controllers = require('../controllers/auth');

const router = express.Router();

router.post('/', controllers.register);
router.post('/', controllers.login);

module.exports = router;

