import mongoose from "mongoose";

const societySchema = mongoose.Schema({
  title: String,
  hour: String,
  place: String,
  categories: String,
  date: String,
  infoline: String,
  description: String,
  cover: {
    filename: String,
    mimetype: String,
    encoding: String
  }
});

export const societyModel = mongoose.model("Societe", societySchema);
