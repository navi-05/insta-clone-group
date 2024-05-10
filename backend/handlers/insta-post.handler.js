import { Post } from "../models/post.model.js";
import { User } from "../models/user.model.js";

/* 
  ? POST
  * Create a new post
  & param (imgUrl, caption, location)
*/
export const createPost = async (req, res) => {
  try {
    const { imgUrl, caption, location, clerkId } = await req.body;

    if (!imgUrl || !caption || !location || !clerkId) {
      return res.status(400).json({ message: "Bad Request" });
    }

    const userExists = await User.find({ clerkId: clerkId });
    if (userExists.length == 0)
      return res.status(401).json({ message: "You're not Authenticated" });

    const userId = userExists[0]._id;

    const newPost = await Post.create({
      caption,
      location,
      imgUrl,
      userId
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
    const posts = await Post.find({}).populate('userId')

    if (!posts) {
      return res.status(400).json({ message: "Bad Request" });
    }

    return res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error " });
  }
};
