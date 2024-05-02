// THIRD PARTY UPLOAD
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import express from "express";
import bodyparser from "body-parser";

// INTERNAL UPLOADS
import { uploadImage } from "./utils/cloudinary.js";
import { connectToDB } from "./db/index.js";
import { createUser } from "./utils/webhooks/user.clerk.js";
import instaPostRouter from "./routes/insta-post.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// MULTER
const storage = new multer.memoryStorage();
const multerUpload = multer({ storage }).single("file");

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ROUTES
app.use("/insta-post", instaPostRouter);

// DUMMY ROUTE
app.get("/", (req, res) => res.send("Hello"));

app.post(
  "/api/webhook/clerk",
  bodyparser.raw({ type: "application/json" }),
  createUser
);
app.post("/api/upload", multerUpload, uploadImage);

app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));
await connectToDB();
