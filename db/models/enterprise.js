import mongoose from "mongoose";

const enterpriseSchema = mongoose.Schema({
  title: String,
  hour: String,
  place: String,
  categories: String,
  date: String,
  expiration_date: String,
  cover: {
    filename: String,
    mimetype: String,
    encoding: String
  }
});

export const enterpriseModel = mongoose.model("Enterprise", enterpriseSchema);
