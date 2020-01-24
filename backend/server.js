const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const sequelize = require('./config/db');

// const initialize = require('./services/passport-config');
// Authentication & Login & Sessions config
// sequelize.authenticate()
//     .then(() => console.log('DB connected'))
//     .catch(error => console.log('Error:' + error))

// initialize(passport);

var path = require('path');

const app = express();
// = Access-Control-Allow-Origin =
app.use(cors());

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
// app.use(session({
// 	secret: 'secret',
// 	resave: false,
// 	saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());
// Define Routes
// = Test =
// app.post('/api/info', (req, res) => res.send('test'));
// // = Setup =
// app.use('/api/create', require('./routes/create'));
// // = User =
// app.use('/api/register', require('./routes/auth'));
// app.use('/api/login', require('./routes/auth'));
// // = Products =
// app.use('/api/anytime/addProduct', require('./routes/products'));
// app.use('/api/anytime/getProducts', require('./routes/products'));
app.use('/', require('./routes/products'));

const PORT = process.env.PORT || 3001;

sequelize.sync()
    .then(result => {
        console.log(`MySql connected... 🔥🔥🔥 on port ${PORT}`, result);
        app.listen(PORT);
    }).catch(err => {
        console.log('😞', err);
    });