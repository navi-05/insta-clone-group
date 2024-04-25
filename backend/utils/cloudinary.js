import cloudinary from 'cloudinary'
import dotenv from 'dotenv'
import path from 'path'
import DatauriParser from 'datauri/parser.js'
dotenv.config()

// DATAURI parser
const parser = new DatauriParser()
const formatBufferTo64 = file => 
  parser.format(
    path.extname(file.originalname).toString(),
    file.buffer
  )

// CLOUDINARY CREDENTIALS
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export const uploadImage = async(req, res) => {
  try {
    const file64 = formatBufferTo64(req.file)

    const cldRres = await cloudinary.v2.uploader.unsigned_upload(file64.content, 'insta-clone', {
      folder: "insta-clone",
      resource_type: "auto",
    });

    return res.json({ url: cldRres.secure_url, created_at: cldRres.created_at })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Server Error "})
  }
}


