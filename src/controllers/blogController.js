import cloudinary from 'cloudinary';
import dotenv  from  "dotenv";
// import path from 'path';
import blogModel from "../model/Blog";
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

export const postBlog = async (req, res) => {
    
    try {
        const result  = await cloudinary.uploader.upload(req.file.path);
        const newBlog = new blogModel({
        image: result.secure_url,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: req.body.date,
        likes: req.body.likes,
        dislikes: req.body.dislikes

    });
    const blog = await newBlog.save();
    res.status(201).json({
        author:"TheSaint",
        message: "Blog created successfully",
        blog: blog
    });
    
   } catch (error) {
    res.status(500).json({
        error: error.message
    })

    
   }

}
// getAllBlog
export const getAllBlog = async (req, res) => {
    try{
        const getAll = await blogModel.find();
        res.status(200).json({
            statusbar: "success",
            data: {
                AllBlogs:getAll
            }
            
        });
    }
    catch(error){
        res.status(500).json({
            'message':'invalid request'
        })

    }

}
// getBlogByID
export const getBlogById = async (req, res) => {
    try {
        const getBlogById = await blogModel.findById(req.params.id)
        res.status(200).json({
            message:"Get ByID Succed",
            IDS:getBlogById
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Failed to Get Values",
            error: error.message
        })
        
    }
    
}


// Update bLog

export const updateBlog = async (req,res) =>{
    console.log(req.file,req.bo);
    try {
        const result  = await cloudinary.uploader.upload(req.file.path);
        const blogUp = await blogModel.findByIdAndUpdate(req.params.id,{
            image: result.secure_url,
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            date: req.body.date,
        })
       return res.status(200).json({
            message: "Blog updated successfully",
            data: blogUp
        })
}
catch(error){
   return res.status(500).json({
        message: "Data not found",
        error: error.message
});
}
}

// Delete Blog

export const deleteBlog = async (req,res)=>{
  
    try {
        const deleteB = await blogModel.findByIdAndDelete(req.params.id)
        res.status(201).json({
            message: "Blog deleted successfully",
            data: deleteB
        })
        
    } 
    catch (error) {
        res.status(500).json({
            message:"Failed To Delete Blog",
            error:error.message
        })
        
    }
}

    




