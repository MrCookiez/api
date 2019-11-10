// Register user
module.exports = register = async (user) => {
    const insertQuery = "INSERT INTO users (firstname, lastname, password, email, ) values (?, ? , ?, ?)";
    return await connection.query(insertQuery, [user.firstname, user.lastname, user.password, user.email]);
};

// Login user
// module.exports = login = (req, res) => {
//     res.body
// };