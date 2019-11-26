const express = require('express');
const controllers = require('../controllers/products/anytime');

const router = express.Router();

router.post('/', controllers.addProduct);
router.get('/', controllers.getProducts);

module.exports = router;

