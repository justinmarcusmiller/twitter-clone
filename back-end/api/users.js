const express = require("express");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const passport = require("passport");
const passportlocal = require("passport-local").Strategy;
const genPassword = require("../lib/passwordUtils").genPassword;
const connection = require("../config/database");
const User = connection.models.User;


const router = express.Router();

// Read All
router.get("/", async (req, res, next) => {
  try {
    const items = await User.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// Read One
router.get("/user/:username", async (req, res, next) => {
  //console.log(req.params);
  try {
    const { username } = req.params;
    //const { password } = req.body.password;
    const item = await users.findOne({
      userName: username,
    });
    console.log(item);
    if (!item) return next();
    return res.json(item);
  } catch (error) {
    console.error("ERROR");
    next(error);
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "feed"
  })
);

router.post("/signup", (req, res, next) => {
  const saltHash = genPassword(req.body.password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newuser = new User({
    username: req.body.username,
    hash: hash,
    salt: salt,
    fullName: req.body.fullname
  });

  newuser.save().then((user) => {
    console.log(user);
  });

});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
})

// Update One
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const value = await schema.validateAsync(req.body);
    const item = await users.findOne({
      _id: id,
    });
    if (!item) return next();
    await users.update(
      {
        _id: id,
      },
      {
        $set: value,
      }
    );
    res.json(value);
  } catch (error) {
    next(error);
  }
});

// Delete One
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await users.remove({ _id: id });
    //res.status(200).send('Success');
    res.json({
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
