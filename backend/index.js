import express from "express";
import cors from "cors";
import multer from "multer";

import dotenv from "dotenv";
import { uploadImage } from "./utils/cloudinary.js";
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

app.post("/api/upload", multerUpload, uploadImage);

app.listen(PORT, () => console.log(`Server started on port : ${PORT}`));

