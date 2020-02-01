import mongoose from "mongoose";

const politicSchema = mongoose.Schema({
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

export const politicModel = mongoose.model("Politique", politicSchema);
