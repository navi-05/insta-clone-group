import express from "express";
import { createPost, getPosts } from "../handlers/insta-post.handler.js";

const instaPostRouter = express.Router();

instaPostRouter.get("/", getPosts)
// instaPostRouter.get("/:id", getPost)
instaPostRouter.post("/", createPost);

export default instaPostRouter;
