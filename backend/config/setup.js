// // // Create all tables
// // app.get('/api/createalltables', (req, res) => {

// //     let createUSERS = 'CREATE TABLE users(id int AUTO_INCREMENT, firstname CHAR(255), lastname CHAR(255), password VARCHAR(255), email VARCHAR(255), PRIMARY KEY(id))';
// //     db.query(createUSERS, (err, result) => {
// //         if (err) throw err;
// //         console.log(result);
// //         res.send('Users table has been created...');
// //     });

// //     let createPOSTS = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
// //     db.query(createPOSTS, (err, result) => {
// //         if (err) throw err;
// //         console.log(result);
// //         res.send('Posts table has been created...');
// //     });

// // });


// var LocalStrategy = require("passport-local").Strategy;

// var bcrypt = require('bcrypt-nodejs');
// var dbconfig = require('./database');
// var mysql = require('mysql');
// var connection = mysql.createConnection(dbconfig.connection);

// connection.query('USE ' + dbconfig.database);

// // module.exports = function(passport) {
// //  passport.serializeUser(function(user, done){
// //   done(null, user.id);
// //  });

// //  passport.deserializeUser(function(id, done){
// //   connection.query("SELECT * FROM users WHERE id = ? ", [id],
// //    function(err, rows){
// //     done(err, rows[0]);
// //    });
// //  });

//  passport.use(
//   'local-signup',
//   new LocalStrategy({
//    usernameField : 'username',
//    passwordField: 'password',
//    passReqToCallback: true
//   },
//   function(req, username, password, done){
//    connection.query("SELECT * FROM users WHERE username = ? ", 
//    [username], function(err, rows){
//     if(err)
//      return done(err);
//     if(rows.length){
//      return done(null, false, req.flash('signupMessage', 'That is already taken'));
//     }else{
//      var newUserMysql = {
//       username: username,
//       password: bcrypt.hashSync(password, null, null)
//      };

//      var insertQuery = "INSERT INTO users (username, password) values (?, ?)";

//      connection.query(insertQuery, [newUserMysql.username, newUserMysql.password],
//       function(err, rows){
//        newUserMysql.id = rows.insertId;

//        return done(null, newUserMysql);
//       });
//     }
//    });
//   })
//  );

//  passport.use(
//   'local-login',
//   new LocalStrategy({
//    usernameField : 'username',
//    passwordField: 'password',
//    passReqToCallback: true
//   },
//   function(req, username, password, done){
//    connection.query("SELECT * FROM users WHERE username = ? ", [username],
//    function(err, rows){
//     if(err)
//      return done(err);
//     if(!rows.length){
//      return done(null, false, req.flash('loginMessage', 'No User Found'));
//     }
//     if(!bcrypt.compareSync(password, rows[0].password))
//      return done(null, false, req.flash('loginMessage', 'Wrong Password'));

//     return done(null, rows[0]);
//    });
//   })
//  );
// };