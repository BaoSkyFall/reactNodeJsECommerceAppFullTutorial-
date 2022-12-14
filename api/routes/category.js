const Category = require("../models/Category");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();


//GET ALL CATEGORIES
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let categories;

    if (qNew) {
      categories = await Category.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      categories = await Category.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      categories = await Category.find();
    }

    res.status(200).json(categories);
  } catch (err) {
    console.log('err:', err)
    res.status(500).json(err);
  }
});

module.exports = router;
