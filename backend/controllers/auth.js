const service = require('../services/auth');
// Register user
module.exports = register = async (req, res) => {
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    };
    console.log("result should be - `Yoda`");
    const result = await service.register(user);
    console.log(result);
    if (result) {
        res.redirect('/profile');
    } else {
        res.send('Incorrect firstname and/or Password!');
    }
    // req.session.loggedin = true;
    // req.session.firstname = firstname;
};

// Login user
// module.exports = login = (req, res) => {
//};