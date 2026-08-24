import mongoose from "mongoose"

export const connectDB =  async()=> {
try{
    console.log("connecting to database ......")
  const response  = await mongoose.connect(process.env.DB_URL)
  console.log("connection successful!!")
}catch(err){
  console.error(err)
}
}