import express from "express"
import { createBlog, deleteBlog, getBlogById, getBlogFunction, updateBlog } from "../controllers/blogControllers.js"
import { verifyToken } from "../middlewares/authMiddleware.js"

// const app = express()
const router = express.Router()


router.post("/create",createBlog)

router.get("/getAll",verifyToken,getBlogFunction)

router.get("/getById/:id",getBlogById)

router.delete("/delete/:id",verifyToken,deleteBlog)

router.put("/update/:id",updateBlog)

export default router