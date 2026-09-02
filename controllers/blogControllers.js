import Blog from "../model/Blog.js"
import User from "../model/User.js"
import Category from  "../model/Category.js"

export const getBlogFunction = async(req,res)=>{
  const allBlogs = await Blog.find().populate("category","-status").populate("author", "-password")
  res.json(allBlogs)
}


export const createBlog = async(req,res)=> {
  console.log(req.body,"body coming from request")
  // const newBlog = await Blog.create(req.body)



  const isExistingUser = await User.findById(req.body.author)
  if (!isExistingUser) {
   return res.status(500).json({
      message: "Author not found of this id"
    })
  }

  const isExistingCategory = await Category.findById(req.body.category)
  if (!isExistingCategory) {
   return res.status(500).json({
      message: "Category not found of this id"
    })
  }

  const newBlog = await Blog.create(req.body)



  res.json(newBlog)
}

export const getBlogById = async(req,res)=>{
  console.log(req.params.id)

  const singleBlog = await Blog.findById(req.params.id)
  res.json(singleBlog)
}

export const deleteBlog = async (req,res)=>{

  const existingBlog = await Blog.findById(req.params.id)

  if (!existingBlog) {
    return res.status(404).json ({
      message : "Blog not found for this id"
    })
  }

  const blog = await Blog.findByIdAndDelete(req.params.id)
  res.status(200).json({
    message : "Blog deleted succesfully"
  })
}


export const updateBlog = async(req,res)=>{
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})
  res.json(updatedBlog)
}