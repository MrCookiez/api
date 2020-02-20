const service = require('../../services/products/anytime');

// Add new product
const addProduct = async (req, res) => {
    const product = {
        // name: req.body.name,
        // description: req.body.description,
        // category: req.body.category,
        // sub_category: req.body.sub_category,
        // price: req.body.price,
        // offer: req.body.offer,
        // availability: req.body.availability
        name: 'Stake Egg\'s',
        description: 'Φιλέτο μοσχαρίσιο ψημένο με BBQ sauce, αυγό, soft cheese, μουστάρδα, μαγιονέζα',
        category: 'sandwich',
        sub_category: 'req.body.sub_category',
        price: 2.50,
        offer: 0,
        availability: 1
    };

    try {
        await service.addProduct(product)
        .then(
            res.send('New product successfully added!')
        ),
        (error) => res.send(error);
    } catch (error) {
        res.redirect('/register');
    }
};

// Get all products
const getProducts = (req, res) => {
    console.log('test');
    return res.send(result);
//   service.getProducts()
//         .then(result => res.send(result)),
//         (error) => res.send(error);
//     } catch (err) {
//         res.redirect('/register');
//     }
};

const controllers = { addProduct, getProducts };

module.exports = controllers;
