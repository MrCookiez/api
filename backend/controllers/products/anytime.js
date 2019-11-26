const service = require('../../services/products/anytime');
const db = require('../../config/db'); //*** REMOVE LATER */
// Add new product
const addProduct = async (req, res) => {
    const product = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        sub_category: req.body.sub_category,
        price: req.body.price,
        offer: req.body.offer,
        availability: req.body.availability
    };

    try {
        service.addProduct(product);
        res.send('Product added');
    } catch (error) {
        res.redirect('/register');
    }
};

// Get all products
const getProducts = async (req, res) => {
    // try {
    //     res.send(service.getProducts());
    // } catch (error) {
    //     res.send('Still not working');
    //     res.redirect('/register');
    // }
    try {
        await db.query('SELECT * FROM anytime_products', (err, result, rows) => {
            if (err) { throw err };
            const tetete =  JSON.stringify(result);
            console.log('rows ====>', tetete);
            res.send(tetete);
            return JSON.stringify(result);
        });
    } catch (error) {
        res.send(`Still not working, ${error}`);
        res.redirect('/register');
    }
};
const controllers = { addProduct, getProducts };

module.exports = controllers;