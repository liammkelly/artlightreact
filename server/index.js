require('dotenv').config()

const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  cookieParser = require('cookie-parser'),
  port = process.env.PORT || 3001

const mysql = require('mysql');

const mc = mysql.createConnection({
  host     : process.env.DATABASE_HOST,
  port     : process.env.DATABASE_PORT,
  user     : process.env.DATABASE_USERNAME,
  password : process.env.DATABASE_PASSWORD,
  database : process.env.DATABASE_SCHEMA
});

mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

var routes = require('./app/routes/appRoutes'); //importing route
routes(app); //register the route
