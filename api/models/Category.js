const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String },
    code: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
