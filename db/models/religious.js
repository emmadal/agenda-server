import mongoose from "mongoose";

const religiousSchema = mongoose.Schema({
  title: String,
  hour: String,
  place: String,
  categories: String,
  date: String,
  cover: {
    filename: String,
    mimetype: String,
    encoding: String
  }
});

export const religiousModel = mongoose.model("Religieux", religiousSchema);
