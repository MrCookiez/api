const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'nodemysql',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;

// const mysql = require('mysql');

// // Create connection
// const db  = mysql.createConnection({
//     host        : 'localhost',
//     user        : 'root',
//     password    : '',
//     database    : 'nodemysql',
// });

// // Connect to DataBase - TEST
// db.connect((err) => {
//     if (err) throw err;
//     console.log('MySql connected...🔥🔥🔥');
// });

// module.exports = db;