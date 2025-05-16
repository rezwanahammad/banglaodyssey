import mongoose, { Schema, model, models } from "mongoose";

const SpotSchema = new Schema({
  name: String,
  image: String,
  details: String,
});

const DistrictSchema = new Schema({
  name: String,
  slug: { type: String, unique: true },
  description: String,
  image: String,
  spots: [SpotSchema],
});

const District = models.District || model("District", DistrictSchema);
export default District;
