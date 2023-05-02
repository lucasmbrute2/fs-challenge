import express from "express"
import { route } from "./routes"
import cors from "cors"

export const app = express()
app.use(express.json())
app.use(cors())
app.use(route)