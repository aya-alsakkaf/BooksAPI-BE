const { model, Schema } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number },
  image: { type: String },
  description: { type: String },
});

module.exports = model("Book", bookSchema);
