import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from "cors"
import express from "express"
import mongoose from 'mongoose'
import helmet from "helmet"


dotenv.config()


const app = express()
const PORT = process.env.PORT || 8080