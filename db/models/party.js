import mongoose from "mongoose";

const partySchema = mongoose.Schema({
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

export const partyModel = mongoose.model("Party", partySchema);
