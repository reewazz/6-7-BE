import express from "express"
import { createUser, login } from "../controllers/userControllers.js"

// const app = express()
const router = express.Router()


router.post("/create",createUser)
router.post("/login",login)



export default router