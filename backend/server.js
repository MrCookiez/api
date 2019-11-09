const express = require('express');
const db = require('./config/db');

// Connect to DataBase
db.connect((err) => {
    if (err) throw err;
    console.log('MySql connected...🔥🔥🔥');
});

const app = express();

// Create all tables
app.get('/api/createalltables', (req, res) => {

    let createUSERS = 'CREATE TABLE users(id int AUTO_INCREMENT, firstname CHAR(255), lastname CHAR(255), password VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id))';
    db.query(createUSERS, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Users table has been created...');
    });

    let createPOSTS = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(createPOSTS, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table has been created...');
    });

});

app.listen('3001', () => {
    console.log('listening to port 3001 ...');
});