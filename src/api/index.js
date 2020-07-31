const express = require('express');
const users = require('./users.js');
const tweets = require('./tweets.js')

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'You are at API home'
  });
});

router.use('/users', users);
router.use('/tweets', tweets);

module.exports = router;