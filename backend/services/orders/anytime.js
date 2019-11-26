const db = require('../../config/db');

// Make an order
const postOrder = async (
    shopName, product) => {
    const insertQuery = `INSERT INTO ${shopName} (title, lastname, password, email) VALUES (?, ?, ?, ?)`;

    await db.query(insertQuery, [user.firstname, user.lastname, hashedPassword, user.email], (err, result) => {
        if (err) throw err;
        console.log('\n DONE BABY RESULTS: => ', result);
        console.log('\n DONE BABY ROWS: => ', rows);
    });
};

// const getOrder = async (
//     shopName, product) => {
//     const insertQuery = `INSERT INTO ${shopName} (title, lastname, password, email) VALUES (?, ?, ?, ?)`;

//     await db.query(insertQuery, [user.firstname, user.lastname, hashedPassword, user.email], (err, result) => {
//         if (err) throw err;
//         console.log('\n DONE BABY RESULTS: => ', result);
//         console.log('\n DONE BABY ROWS: => ', rows);
//     });
// };