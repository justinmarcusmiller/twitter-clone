const express = require("express");
//const monk = require("monk");
const connection = require("../config/database");
const mongoose = require("mongoose");
const Tweet = connection.models.Tweet;


const router = express.Router();

// Read All
router.get("/", async (req, res, next) => {
  try {
    const items = await Tweet.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

// Read One
// router.get("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const item = await tweets.findOne({
//       _id: id,
//     });
//     if (!item) return next();
//     return res.json(item);
//   } catch (error) {
//     next(error);
//   }
// });

// Create One
router.post("/", async (req, res, next) => {
  try {
    const tweet = new Tweet({
      //_id: new mongoose.mongoose.Types.ObjectId(),
      authorUserName: req.body.authorUsername,
      authorFullName: req.body.authorFullName,
      content: req.body.content,
    });
  } catch (error) {
    next(error);
  }
});

// Update One
// router.put("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const value = await schema.validateAsync(req.body);
//     const item = await tweets.findOne({
//       _id: id,
//     });
//     if (!item) return next();
//     await tweets.update(
//       {
//         _id: id,
//       },
//       {
//         $set: value,
//       }
//     );
//     res.json(value);
//   } catch (error) {
//     next(error);
//   }
// });

// Delete One
// router.delete("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     await tweets.remove({ _id: id });
//     //res.status(200).send('Success');
//     res.json({
//       message: "Success",
//     });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
