const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    image_url: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sub_category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    offer: {
        type: Sequelize.BOOLEAN,
    },
    availability: {
        type: Sequelize.BOOLEAN,
    }
});

module.exports = Product;