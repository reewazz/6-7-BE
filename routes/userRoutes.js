import express from "express"
import { createUser } from "../controllers/userControllers.js"

// const app = express()
const router = express.Router()


router.post("/create",createUser)



export default router