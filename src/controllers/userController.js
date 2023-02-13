import  Jwt  from "jsonwebtoken";
// import dotenv  from "dotenv";
// import  cloudinary from 'cloudinary';
import bcrypt from "bcryptjs"
import userModel from "../model/User"



export const signUp =  async (req,res)=>{
// console.log(req.body);
    try{
        // pawwWord
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
        // cloudinary upload
        // const result = await cloudinary.uploader.upload(req.file.path);

        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            // image: result.secure_url,
            role: req.body.role,
            password: hashedPass    

            // image: req.body.image,
        })
        const token = await Jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:process.env.EXPIRE_DATE});
        

        const user = await newUser.save()
        res.status(200).json({
            Author: "Muhoza John",
            message: "User created successfully",
            data: user,
            token: token
            
        })
    }
    catch(error){
        res.status(500).json(error)
    }


}

// login
export const login = async (req,res)=>{
    try{
        const user = await userModel.findOne({username:req.body.username})
        if(!user){
            return res.status(404).json({
                message: "User not found"
            })
        }
        const isMatch = await bcrypt.compare(req.body.password,user.password)
        if(!isMatch){
            return res.status(404).json({
                message: "Password is incorrect"
            })
        }
        const token = await Jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:process.env.EXPIRE_DATE});
        res.status(200).json({
            message: "User logged in successfully",
            data: user,
            token: token
        })
    }
    catch(error){
        res.status(500).json({
            message: "Data not found Failed to login"

        })
    }
}




// all Users
export const getAllUsers = async (req,res) =>{
    try {
        const users = await userModel.find()
        res.status(200).json({
            Author: "The Saint",
            message: "Users fetched successfully",
            data: users
        })

    } catch (error) {
        res.status(500).json({
            message: "Data not found"
        })
    }
}
// Get User by id

export const getAllUsersId = async (req,res) =>{
    try {
        const users = await userModel.findById(req.params.id)
        res.status(200).json({
            Author: "The Saint",
            message: "Users fetched successfully",
            data: users
        })

    } catch (error) {
        res.status(500).json({
            message: "Data not found"

        })
    }
}



// update User by id

export const updateUser = async (req,res) =>{
    try {
        const user = await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            Author: "The Saint",
            message: "User updated successfully",
            data: user
        })
}
catch(error){
    res.status(500).json({
        message: "Data not found"
});
}
}
// Delete User by id
export const deleteUser = async (req,res) =>{
    try {
        const user = await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "User deleted successfully",
            data: user  
        })
    } 
    catch (error) {
        res.status(500).json({
            message: "Data Not Found"
        })

}

}
