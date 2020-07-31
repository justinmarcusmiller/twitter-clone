const express = require("express");
const monk = require("monk");
const Joi = require("joi");

const db = monk(process.env.MONGO_URI);
const tweets = db.get("tweets");

const schema = Joi.object({
  content: Joi.string().trim().required(),
  authorUserName: Joi.string().trim().required(),
  authorFullName: Joi.string().trim().required(),
  userAvatarUrl: Joi.string().uri(),
  date: Joi.date().iso(),
});

const router = express.Router();

// Read All
router.get("/", async (req, res, next) => {
  try {
    const items = await tweets.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// Read One
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await tweets.findOne({
      _id: id,
    });
    if (!item) return next();
    return res.json(item);
  } catch (error) {
    next(error);
  }
});

// Create One
router.post("/", async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const inserted = await tweets.insert(value);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
});

// Update One
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const value = await schema.validateAsync(req.body);
    const item = await tweets.findOne({
      _id: id,
    });
    if (!item) return next();
    await tweets.update(
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
    await tweets.remove({ _id: id });
    //res.status(200).send('Success');
    res.json({
      message: 'Success',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
