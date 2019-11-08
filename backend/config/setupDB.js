// 1. CREATE THE DATABASE
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created....');
    });
});

// #. CREATE PRODUCTS TABLE
// #. CREATE ORDERS TABLE
// #. CREATE SHOPS TABLE
// #. CREATE ANALYTICS TABLE
// #. CREATE RATINGS/FEEDBACK TABLE

// #. CREATE POSTS TABLE
app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Post table created....');
    });
});

// #. CREATE USERS TABLE
app.get('/createuserstable', (req, res) => {
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, firstname CHAR(255), lastname CHAR(255), password VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Users table created....');
    });
});

