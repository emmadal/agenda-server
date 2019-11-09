import mongoose from "mongoose";

const societySchema = mongoose.Schema({
  title: String,
  hour: String,
  place: String,
  expiration_date: String,
  date: String,
  cover: {
    filename: String,
    mimetype: String,
    encoding: String
  }
});

export const societyModel = mongoose.model("Society", societySchema);
