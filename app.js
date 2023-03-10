
import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import userRouter from "./src/routers/userRouter.js";
import { urlRouter } from "./src/routers/urlsRouter.js";

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

app.use([userRouter, urlRouter]) 

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)})