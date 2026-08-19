import express from 'express'
import mongoose from 'mongoose';
import Blog from './model/Blog.js';
import dotenv from "dotenv"


const app = express()

app.use(express.json())


dotenv.config()

const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    category: "beauty",
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    brand: "Essence"
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    category: "beauty",
    price: 19.99,
    discountPercentage: 18.19,
    rating: 2.86,
    stock: 34,
    brand: "Glamour Beauty"
  },
  {
    id: 3,
    title: "Powder Canister",
    category: "beauty",
    price: 14.99,
    discountPercentage: 9.84,
    rating: 4.64,
    stock: 89,
    brand: "Velvet Touch"
  },
  {
    id: 4,
    title: "Red Lipstick",
    category: "beauty",
    price: 12.99,
    discountPercentage: 12.16,
    rating: 4.36,
    stock: 91,
    brand: "Chic Cosmetics"
  },
  {
    id: 5,
    title: "Red Nail Polish",
    category: "beauty",
    price: 8.99,
    discountPercentage: 11.44,
    rating: 4.32,
    stock: 79,
    brand: "Nail Couture"
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    category: "fragrances",
    price: 49.99,
    discountPercentage: 1.89,
    rating: 4.37,
    stock: 29,
    brand: "Calvin Klein"
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    category: "fragrances",
    price: 129.99,
    discountPercentage: 16.51,
    rating: 4.26,
    stock: 58,
    brand: "Chanel"
  },
  {
    id: 8,
    title: "Dior J'adore",
    category: "fragrances",
    price: 89.99,
    discountPercentage: 14.72,
    rating: 3.8,
    stock: 98,
    brand: "Dior"
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    category: "fragrances",
    price: 69.99,
    discountPercentage: 0.62,
    rating: 3.96,
    stock: 4,
    brand: "Dolce & Gabbana"
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    category: "fragrances",
    price: 79.99,
    discountPercentage: 14.39,
    rating: 2.74,
    stock: 91,
    brand: "Gucci"
  },
  {
    id: 11,
    title: "Annibale Colombo Bed",
    category: "furniture",
    price: 1899.99,
    discountPercentage: 8.57,
    rating: 4.77,
    stock: 88,
    brand: "Annibale Colombo"
  },
  {
    id: 12,
    title: "Annibale Colombo Sofa",
    category: "furniture",
    price: 2499.99,
    discountPercentage: 14.4,
    rating: 3.92,
    stock: 60,
    brand: "Annibale Colombo"
  },
  {
    id: 13,
    title: "Bedside Table African Cherry",
    category: "furniture",
    price: 299.99,
    discountPercentage: 19.09,
    rating: 2.87,
    stock: 64,
    brand: "Furniture Co."
  },
  {
    id: 14,
    title: "Knoll Saarinen Executive Conference Chair",
    category: "furniture",
    price: 499.99,
    discountPercentage: 2.01,
    rating: 4.88,
    stock: 26,
    brand: "Knoll"
  },
  {
    id: 15,
    title: "Wooden Bathroom Sink With Mirror",
    category: "furniture",
    price: 799.99,
    discountPercentage: 8.8,
    rating: 3.59,
    stock: 7,
    brand: "Bath Trends"
  },
  {
    id: 16,
    title: "Apple",
    category: "groceries",
    price: 1.99,
    discountPercentage: 12.62,
    rating: 4.19,
    stock: 8
  },
  {
    id: 17,
    title: "Beef Steak",
    category: "groceries",
    price: 12.99,
    discountPercentage: 9.61,
    rating: 4.47,
    stock: 86
  },
  {
    id: 18,
    title: "Cat Food",
    category: "groceries",
    price: 8.99,
    discountPercentage: 9.58,
    rating: 3.13,
    stock: 46
  },
  {
    id: 19,
    title: "Chicken Meat",
    category: "groceries",
    price: 9.99,
    discountPercentage: 13.7,
    rating: 3.19,
    stock: 97
  },
  {
    id: 20,
    title: "Cooking Oil",
    category: "groceries",
    price: 4.99,
    discountPercentage: 9.33,
    rating: 4.8,
    stock: 10
  },
  {
    id: 21,
    title: "Cucumber",
    category: "groceries",
    price: 1.49,
    discountPercentage: 0.16,
    rating: 4.07,
    stock: 84
  },
  {
    id: 22,
    title: "Dog Food",
    category: "groceries",
    price: 10.99,
    discountPercentage: 10.27,
    rating: 4.55,
    stock: 71
  },
  {
    id: 23,
    title: "Eggs",
    category: "groceries",
    price: 2.99,
    discountPercentage: 11.05,
    rating: 2.53,
    stock: 9
  },
  {
    id: 24,
    title: "Fish Steak",
    category: "groceries",
    price: 14.99,
    discountPercentage: 4.23,
    rating: 3.78,
    stock: 74
  },
  {
    id: 25,
    title: "Green Bell Pepper",
    category: "groceries",
    price: 1.29,
    discountPercentage: 0.16,
    rating: 3.25,
    stock: 33
  },
  {
    id: 26,
    title: "Green Chili Pepper",
    category: "groceries",
    price: 0.99,
    discountPercentage: 1,
    rating: 3.66,
    stock: 3
  },
  {
    id: 27,
    title: "Honey Jar",
    category: "groceries",
    price: 6.99,
    discountPercentage: 14.4,
    rating: 3.97,
    stock: 34
  },
  {
    id: 28,
    title: "Ice Cream",
    category: "groceries",
    price: 5.49,
    discountPercentage: 8.69,
    rating: 3.39,
    stock: 27
  },
  {
    id: 29,
    title: "Juice",
    category: "groceries",
    price: 3.99,
    discountPercentage: 12.06,
    rating: 3.94,
    stock: 50
  },
  {
    id: 30,
    title: "Kiwi",
    category: "groceries",
    price: 2.49,
    discountPercentage: 15.22,
    rating: 4.93,
    stock: 99
  }
];


const connectDB =  async()=> {
try{
    console.log("connecting to database ......")
  const response  = await mongoose.connect(process.env.DB_URL)
  console.log("connection successful!!")
}catch(err){
  console.error(err)
}
}

connectDB()


app.get('/', (req,res) => {
  res.send('Hello World')
})

app.get("/hello",(req,res)=>{
    res.send("Hello world again !!!!!")
})

app.get("/course/:name",(req,res)=>{
  console.log(req.params)
    res.send(`This is api of course ${req.params.name} `)
})

app.get("/movie/:title",(req,res)=>{
  console.log(req.params)
    res.send(`This is api of course ${req.params.title} `)
})

app.post("/blog/create",async(req,res)=> {
  console.log(req.body,"body coming from request")
  const newBlog = await Blog.create(req.body)
  res.json(newBlog)
})


app.get("/blog/getAll",async(req,res)=>{
  const allBlogs = await Blog.find()
  res.json(allBlogs)
})


app.get("/blog/getById/:id",async(req,res)=>{
  console.log(req.params.id)

  const singleBlog = await Blog.findById(req.params.id)
  res.json(singleBlog)
})


app.delete("/blog/delete/:id",async (req,res)=>{

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
})


app.put("/blog/update/:id",async(req,res)=>{
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})
  res.json(updatedBlog)
})






app.get("/course",(req,res)=>{
    res.send("This is course page ")
})

app.get("/developer/:name",(req,res)=>{
  console.log(req.query)
    res.send(`This is developer whose name is ${req.params.name} experience is ${req.query.years} years & position is ${req.query.pos} `)
})


app.get("/products",(req,res)=>{

  res.json(products)
})

app.get("/products/:id",(req,res)=>{
console.log(req.params)

const filteredProduct = products.filter((item,index)=>+req.params.id===item.id)
console.log(filteredProduct)
  res.json(filteredProduct)
})



app.listen(8000,() => {
  console.log('Server is running on http://localhost:8000')
} )


