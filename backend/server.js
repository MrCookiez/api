const express = require('express');
const session = require('express-session');
const db = require('./config/db');
const router = express.Router();
const bodyParser = require('body-parser');
var path = require('path');

// Connect to DataBase
db.connect((err) => {
    if (err) throw err;
    console.log('MySql connected...🔥🔥🔥');
});

const app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());


// Define Routes
app.use('/api/register', require('./routes/auth'));
// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 }
//   }))

app.get('/welcome', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen('3001', () => {
    console.log('listening to port 3001 ...');
});

// ////////

// const express = require('express');
// const connectDB = require('./config/db');
// const path = require('path');

// const app = express();

// // Connect Database
// connectDB();

// // Init Middleware
// app.use(express.json({ extended: false }));

// // Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
