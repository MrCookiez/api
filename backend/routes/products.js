// const express = require('express');
// const controllers = require('../controllers/products/anytime');

// const router = express.Router();

// router.post('/', controllers.addProduct);
// router.get('/', controllers.getProducts);

// module.exports = router;

const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Product = require('../models/Product');

router.get('/', (req, res) =>
    Product.findAll()
    .then(products => {
        console.log(products);
        res.sendStatus(200);
    })
    .catch(error => console.log(error)));

module.exports = router;