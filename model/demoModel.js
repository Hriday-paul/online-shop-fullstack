const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const demoSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    roll: {
      type: Number,
      required: true,
    },
  }
);

module.exports = testDemo = mongoose.model("testDemo", demoSchema);
