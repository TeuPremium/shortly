
import signUpRouter from "./src/routers/signUp.js";
import express from "express"
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();

const app = express()
app.use(express.json())
app.use(cors())

app.use([signUpRouter]) 

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)})