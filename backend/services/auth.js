const db = require('../config/db');

// Register user
const register = async (user) => {
    const insertQuery = "INSERT INTO users(firstname, lastname, password, email) values(?, ? , ?, ?)";
    await db.query(insertQuery, [user.firstname, user.lastname, user.password, user.email]);
};

const service = {
    register,
};

module.exports = service;
// Login user
// module.exports = login = (req, res) => {
//     res.body
// };