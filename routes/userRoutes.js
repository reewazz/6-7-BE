import express from "express"
import { createUser, getAllUsers, login } from "../controllers/userControllers.js"

// const app = express()
const router = express.Router()


router.post("/create",createUser)
router.post("/login",login)
router.get("/getAll",getAllUsers)



export default router