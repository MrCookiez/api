const express = require('express');
const session = require('express-session');
const db = require('./config/db');
const router = express.Router();
const bodyParser = require('body-parser');
var path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

// Define Routes
app.post('/api/info', (req, res) => res.send('test'));
app.use('/api/register', require('./routes/auth'));

app.listen('3001', () => {
    console.log('listening to port 3001 ...');
});
