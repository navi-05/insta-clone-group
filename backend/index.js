import express from 'express'

import dotenv from 'dotenv'
import { connectToDB } from './db/index.js';
dotenv.config()

const PORT = process.env.PORT

const app = express();

app.get('/', async (req, res) => {
  await connectToDB()
  res.send("Hello")
})

app.listen(PORT, () => console.log(`Server started on port : ${PORT}`))