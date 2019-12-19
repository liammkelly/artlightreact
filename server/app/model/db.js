'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : process.env.DATABASE_HOST,
    post     : process.env.DATABASE_PORT,
    user     : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_SCHEMA
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;