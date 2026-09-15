import express from "express"
import { createBlog, deleteBlog, getBlogById, getBlogFunction, updateBlog } from "../controllers/blogControllers.js"
import { verifyToken } from "../middlewares/authMiddleware.js"
import { upload } from "../controllers/file.js"

// const app = express()
const router = express.Router()


router.post("/create",upload.single('blogImage'),createBlog)

router.get("/getAll",getBlogFunction)

router.get("/getById/:id",getBlogById)

router.delete("/delete/:id",verifyToken,deleteBlog)

router.put("/update/:id",updateBlog)

export default router