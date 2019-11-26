const express = require('express');
const controllers = require('../controllers/products/anytime');

const router = express.Router();

router.post('/', controllers.addProduct);

module.exports = router;

