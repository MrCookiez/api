const db = require('../config/db');

// Create user tables
const setup = async (userTable) => {
    let insertQuery = 'CREATE TABLE users(id int AUTO_INCREMENT, firstname CHAR(255), lastname CHAR(255), password VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id))';
    return await db.query(insertQuery, [user.firstname, user.lastname, user.password, user.email]);
};
const service = {
    register,
};
module.exports = service;
// Login user
// module.exports = login = (req, res) => {
//     res.body
// };


// #. CREATE USERS TABLE
app.get('/createuserstable', (req, res) => {
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, firstname CHAR(255), lastname CHAR(255), password VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Users table created....');
    });
});
