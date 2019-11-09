import mongoose from "mongoose";

const religiousSchema = mongoose.Schema({
  title: String,
  hour: String,
  expiration_date: String,
  place: String,
  date: String,
  cover: {
    filename: String,
    mimetype: String,
    encoding: String
  }
});

export const religiousModel = mongoose.model("Religious", religiousSchema);
