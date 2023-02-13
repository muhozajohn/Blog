import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
        },
    content: {
        type: String,
        required: true
        },
    author: {
        type: String,
        required: true
        },
    date: { 
        type: Date,
        default: Date.now
        },
    likes: {    
        type: Array,
        default: 0
        },
    dislikes: {
        type: Array,
        default: 0
    }
    , comments: {
        type: Array,
    }
},{
    timestamps: true
})

const Blog = mongoose.model("blogtbl", blogSchema);
export default Blog;