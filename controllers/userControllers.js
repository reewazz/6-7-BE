import User from "../model/User.js"
import bcrypt from "bcrypt"

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



// hello ->cceuchgwei327->diuwedibwe->eiwhbfybwef