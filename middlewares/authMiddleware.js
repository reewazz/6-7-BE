import jwt from "jsonwebtoken"
import { jwtSecret } from "../controllers/userControllers.js"

export const verifyToken = async(req,res,next)=> {

   try {
     const headers = req.headers.authorization
       const token = headers.split(" ")[1]

    const decoded = jwt.verify(token,jwtSecret)
    console.log(decoded)

    if(!decoded){
        return res.json({
            message : 'Token is invalid or expired'
        })
    }
    
    req.user = decoded
    next()
   }
   catch(err) {
      return res.json({
            message : 'Token is invalid or expired'
        })
   }



}