
const express = require('express');
const router = express.Router();
const controllers = require('../controllers/products');

router.get('/', controllers.getProducts);
router.post('/add', controllers.addProduct);

// router.update('/', controllers.updateProduct); UPDATE
// router.delete('/', controllers.deleteProduct); DELETE

module.exports = router;