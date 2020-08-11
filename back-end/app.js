const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const passport = require("passport")
const passportlocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");

require('dotenv').config();

const middlewares = require('./middlewares')
const api = require('./api/index.js');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
  origin: "http://localhost:3000",
  //credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser("secretcode"));
app.use(session({
  secret: "secretcode",
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req,res) => {
  res.json({
    message: 'You are home.'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;