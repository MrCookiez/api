const service = require('../services/setup/create');

// Create product table
const create = async (req, res) => {
    const table = {
        shopName: req.body.shopName,
    };

    try {
        service.create(table);
        res.redirect(`/${table.shopName}_products`);
        res.send(`${table.shopName} has been created..`);
    } catch (error) {
        res.redirect('/register');
    }
};

const controllers = { create };

module.exports = controllers;