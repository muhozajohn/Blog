import dotenv from 'dotenv'
import commentModel from '../model/coment'
import blogModel from '../model/Blog'

dotenv.config()

// Single Blog Post
// const findId=()=>{
//     const search= new URLSearchParams(window.location.search);
//     const id=search.get('id');
//     return id;
// // }
// console.log(search);

// comment Post
export const SingleBlog = async (req,res)=>{
    const {id} = req.params;
    console.log(req.user);
    try {

        const  blog  =  await blogModel.findById(id);

        if(!blog){
       return  res.status(404).json({message: 'Blog not found'})
        }

        
        
       const newComment= new commentModel({
        username:req.user.username,
        comment:req.body.comment
       });


       console.log(newComment);
       
     blog.comments.push(newComment);
     await blog.save()
     res.status(200).json({
        message: "comment posted",
        data:{
            body:blog
        }
     });
     
       
    } catch (error) {
        res.status(500).json({
            message:"Failed",
            error:  error.message
        })
        
    }
}

// getAll Comment

export const getAllcoment = async (req,res,err)=>{

    try{
        const getComent = await commentModel.find();
        res.status(201).json({
            message:"All comment Displayed",
            data:{
                body:getComent
            }
        })
    }
    catch(error){
        res.status(404).json({
            message: "failed",
            error: error.message
        })
    }
}



// getComent by Id
export const getAllcomentById = async (req,res,err) =>{
 
        try{
            const getById = await commentModel.findById(req.params.id);
            res.status(200).json({
                message: "comment fetched By Id",
                Data:{
                    body:getById
                }
            });
        }
        catch(error){
            res.status(405).json({
                message:"Coments Not Found",
                error: error.message
            })
        }
    }

// delete Comment
export const delComent = async (req,res,err)=>{

        try{
        const delComent = await commentModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Comment Deleted Well!!!",
            Data:{
                body:delComent
            }
        })
    }
    catch(error){
        res.status(500).json({
            message: "fail to Delete Comment",
            error: error.message
        })
    }
}
    


// upDate Comment

export const upComent = async (req,res,er)=>{

        try{
            const upComent = await commentModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.status(200).json({
                message:"Comment Update Welll",
                Data:{
                    body:upComent
                }
            });
        }
        catch(error){
            res.status(404).json({
                message: "Failed To Upodate Comment",
                error: error.message
            })
        }
    }
