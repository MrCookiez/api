const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
// const initialize = require('./services/passport-config');
// Authentication & Login & Sessions config

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
app.post('/api/info', (req, res) => res.send('test'));
// = Setup =
app.use('/api/create', require('./routes/create'));
// = User =
app.use('/api/register', require('./routes/auth'));
app.use('/api/login', require('./routes/auth'));
// = Products =
app.use('/api/anytime/addProduct', require('./routes/products'));
app.use('/api/anytime/getProducts', require('./routes/products'));

app.listen('3001', () => {
    console.log('listening to port 3001 ...');
});
