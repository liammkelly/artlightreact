require('dotenv').config({path: __dirname + '/.env'})

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  port = process.env.PORT || 3001

const mysql = require('mysql');

const mc = mysql.createConnection({
  host     : 'goaliedb.cta3qlz6tidx.us-east-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'passw0rd',
  database : 'goaliedb'
});

mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route
