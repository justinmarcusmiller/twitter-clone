const express = require("express");
const monk = require("monk");
const Joi = require("joi");
const bcrypt = require("bcrypt");
//const { username } = require("casual-browserify");

const db = monk(process.env.MONGO_URI);
const users = db.get("users");

const schema = Joi.object({
  userName: Joi.string().trim(),
  fullName: Joi.string().trim(),
  password: Joi.string().trim(),
  email: Joi.string().trim(),
});

const router = express.Router();

// Read All
router.get("/", async (req, res, next) => {
  try {
    const items = await users.find({});
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

router.post("/login", async (req, res, next) => {
  console.log(req.body);
  try {
    const username = req.body.username;
    const user = await users.findOne(
      {
        userName: username
      }
    );
    console.log(user);
    if (!user) return next();
    return res.json(user);
  } catch (error) {
    console.log("ERROR");
    console.log(error);
    next(error);
  }
});

// Create One
//TODO: Check if user is already signed up or email in use
router.post("/signup", async (req, res, next) => {
  try {
    let value = await schema.validateAsync(req.body);
    //console.log(value.password);
    bcrypt.hash(value.password, 10, (err, hash) => {
      if (err || value.password == undefined) {
        //console.log("newPassword = " + value.password);
        console.log("ERROR " + err);
        return res.status(500).json({
          error: err,
        });
      } else {
        value.password = hash;
        //console.log(value.password);
        users.insert(value);
        res.json(value);
      }
    });
  } catch (error) {
    next(error);
  }
});

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
