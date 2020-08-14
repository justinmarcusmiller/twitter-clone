const mongoose = require('mongoose');

require('dotenv').config();

/**
 * -------------- DATABASE ----------------
 */

const conn = process.env.DB_STRING;

const connection = mongoose.createConnection(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Creates simple schema for a User.  The hash and salt are derived from the user's given password when they register
const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    salt: String,
    fullName: String
});

const TweetSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    authorUserName: {type: String, required: true},
    authorFullName: {type: String, required: true},
    content: {type: String, required: true},
    date: { type: Date, default: Date.now}
  })

const User = connection.model('User', UserSchema);
const Tweet = connection.model('Tweet', TweetSchema);

// Expose the connection
module.exports = connection;
