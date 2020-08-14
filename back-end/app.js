const express = require('express');
const mongoose = require('mongoose')
const helmet = require('helmet');
const cors = require('cors');
const passport = require("passport")
const cookieParser = require("cookie-parser");
const session = require("express-session");
const router = express.Router();
var crypto = require("crypto");
const app = express();
const connection = require("./config/database");
//var api = require("./api");

require('dotenv').config();
const api = require('./api/index.js');
const middlewares = require('./middlewares')
const MongoStore = require("connect-mongo")(session);

// Middleware
//app.use(morgan('dev'));
app.use(helmet());
app.use(cors({
  origin: "http://localhost:3000",
  //credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser("secretcode"));

// Session Setup

const sessionStore = new MongoStore({
  mongooseConnection: connection,
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // Equals one day
    },
  })
);

// Passport Authentication

require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

// Home Route
app.get('/', (req,res) => {
  res.json({
    message: 'You are home.'
  });
});

// Api Routes
app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;