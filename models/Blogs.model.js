const { Schema, model } = require("mongoose");

// 1. Define your schema
let BlogsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: String,
  body: String,
  tags: [String],
  author: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
 
});

// 2. Define your model
let BlogsModel = model("blogs", BlogsSchema);

// 3. Export your Model with 'module.exports'
module.exports = BlogsModel;
