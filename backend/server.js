const express = require('express');
var session = require('express-session');
const db = require('./config/db');
const router = express.Router();
const bodyParser = require('body-parser');
var path = require('path');

// const index = require('./routes/index');
// const users = require('./routes/users');

// Connect to DataBase
db.connect((err) => {
    if (err) throw err;
    console.log('MySql connected...🔥🔥🔥');
});

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/public'));
});

app.post('/register', (req, res) => {
	var firstname = req.body.firstname;
	var password = req.body.password;
	if (firstname && password) {
		connection.query('SELECT * FROM accounts WHERE firstname = ? AND password = ?', [firstname, password], function(error, results, fields) {
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.firstname = firstname;
				res.redirect('/home');
			} else {
				res.send('Incorrect firstname and/or Password!');
			}
			res.end();
		});
	} else {
		res.send('Please enter firstname and Password!');
		res.end();
	}
});

app.get('/welcome', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});
// router.get('/', (req, res, next) => {
//     res.render('index', { title: 'Registration' });
//   });

// router.get('/register', (req, res, next) => {
//     console.log(req.body.firstname);
//     console.log(req.body.lastname);
//     res.render('index', { title: 'Registration Complete' });
// });

// Define Routes
// app.use('/', index);
// app.use('/users', users);

// Init Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// Create all tables
// app.get('/api/createalltables', (req, res) => {

//     let createUSERS = 'CREATE TABLE users(id int AUTO_INCREMENT, firstname CHAR(255), lastname CHAR(255), password VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id))';
//     db.query(createUSERS, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('Users table has been created...');
//     });

//     let createPOSTS = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
//     db.query(createPOSTS, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.send('Posts table has been created...');
//     });
// });

app.listen('3001', () => {
    console.log('listening to port 3001 ...');
});