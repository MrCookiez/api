const express = require('express');
const mysql = require('mysql');

// Create connection
const db  = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'nodemysql',
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql connected...🔥🔥🔥');
});

const app = express();

/**
 * All the endpoint should be in api/ or routes/ folder
 * 1. Users (register, signin)
 * Desc: Table with all registered users info
 * 2. Shops (info, products, ordres, analytics)
 * Desc: Table with shops information (phone, address, schedule, type etc...)
 * 3. Orders
 * 4. Products
 * 5. Analytics/Insights/Statistics/Reports
 * 6. Posts
 */

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created....');
    });
});

app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post table created....');
    });
});

app.get('/createuserstable', (req, res) => {
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, firstname CHAR(255), lastname CHAR(255), password VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Users table created....');
    });
});

app.post('/register', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post table created....');
    });
});

app.listen('3001', () => {
    console.log('listening to port 3001 ...');
});