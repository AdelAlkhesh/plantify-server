const { Schema, model } = require("mongoose");

// 1. Define your schema
let PlantFamilySchema = new Schema({
  nickname: String,
  scientific_name: String,
  image: String,
  details: String,
  price: Number,
  care_routine: String,
  date_bought: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

// 2. Define your model
let PlantFamilyModel = model("plantFamily", PlantFamilySchema);

// 3. Export your Model with 'module.exports'
module.exports = PlantFamilyModel;
