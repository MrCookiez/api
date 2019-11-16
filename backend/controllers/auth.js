const service = require('../services/auth');
const db = require('../config/db');

// Register user
module.exports = register = (req, res) => {
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
        email: req.body.email
    };

    const insertQuery = "INSERT INTO users (firstname, lastname, password, email) VALUES (?, ?, ?, ?)";
    db.query(insertQuery, [user.firstname, user.lastname, user.password, user.email], (err, result) => {
        if (err) throw err;
		res.json('1 record inserted', result);
    });

    // console.log("Connected!");
	// const query = "INSERT INTO users (firstname, lastname, password, email) VALUES ('firstnameTEST', 'lastnameTEST', 'passwordTEST', 'email@testemail.com')";
	// db.query(query, (err, result) => {
		// if (err) throw err;
		// console.log("1 record inserted");
		// console.log(result);
		// res.json('Done!');
	// });
        // if (result) {
        //     res.redirect('/');
        // } else {
        //     res.send('Incorrect firstname and/or Password!');
        // }
    // req.session.loggedin = true;
    // req.session.firstname = firstname;
};

// Login user
// module.exports = login = (req, res) => {
//};