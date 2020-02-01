import mongoose from "mongoose";

const sportSchema = mongoose.Schema({
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

export const sportModel = mongoose.model("Sport", sportSchema);
