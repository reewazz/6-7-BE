import express from "express"
import { createBlog, deleteBlog, getBlogById, getBlogFunction, updateBlog } from "../controllers/blogControllers.js"

// const app = express()
const router = express.Router()


router.post("/create",createBlog)

router.get("/getAll",getBlogFunction)

router.get("/getById/:id",getBlogById)

router.delete("/delete/:id",deleteBlog)

router.put("/update/:id",updateBlog)

export default router