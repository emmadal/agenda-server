import mongoose from "mongoose";

const partySchema = mongoose.Schema({
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
    encoding:String
  }
});

export const partyModel = mongoose.model("Divertissement", partySchema);
