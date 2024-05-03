import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});

export const Post = mongoose.model("Post", postSchema, "posts");
