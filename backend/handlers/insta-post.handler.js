import { Post } from "../models/post.model.js";

/* 
  ? POST
  * Create a new post
  & param (imgUrl, caption, location)
*/
export const createPost = async (req, res) => {
  try {
    // TODO: Handle auth
    const { imgUrl, caption, location } = await req.body;

    if (!imgUrl || !caption || !location) {
      return res.status(400).json({ message: "Bad Request" });
    }

    const newPost = await Post.create({
      caption,
      location,
      imgUrl,
    });

    if (!newPost)
      return res.status(400).json({ message: "Cannot create post" });

    return res.status(200).json({ newPost });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error " });
  }
};

/* 
  ? GET 
  * Gets all posts
*/
export const getPosts = async (req, res) => {
  try {
    // TODO: Handle auth
    const posts = await Post.find({})

    if(!posts) {
      return res.status(400).json({ message: "Bad Request" })
    }

    return res.status(200).json({ posts })  

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error " });
  }
}