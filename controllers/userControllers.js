import User from "../model/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()
export const jwtSecret = process.env.JWT_SECRET

export const createUser = async(req,res)=> {

    const password = req.body.password
    const emailfrombody = req.body.email

    const existingEmail = await User.findOne({email:emailfrombody})

    console.log(existingEmail)

    if(existingEmail) {
        return res.status(500).json({
            message : "Email already exists"
        })
    }
 
    const hashedPassword = await  bcrypt.hash(password,10)

    const createdUser = await User.create({
            ...req.body,
        password : hashedPassword
    })
    res.json(createdUser)
}



export const login = async (req,res) => {
    const email = req.body.email
    const password = req.body.password


    const user = await User.findOne({email})

    if (!user) {
        return res.status(404).json({
            message : "User not found"
        })
    }
    
// password123 -> dehduhw93242232398ru20ru2dehdfw
    const isMatch = await bcrypt.compare(password,user.password)
   
    if(!isMatch) {
        return res.status(500).json({
            message: "Email or password incorrect"
        })
    }


    const token = jwt.sign ({
        id : user._id,
        email : user.email,
        name : user.fullName
    },jwtSecret,{expiresIn:"30d"})

    const finalResponse = {
        message : "Logged in successfully",
        email : user.email,
        fullName : user.fullName,
        image : user.image,
        id :user._id,
        token : token
    }


    res.json(finalResponse)


}


// hello ->cceuchgwei327->diuwedibwe->eiwhbfybwef