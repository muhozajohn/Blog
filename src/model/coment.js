import mongoose from "mongoose";

const comentBlog = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    }
},{
    timestamps:true
})

const comment = mongoose.model("commenttbl", comentBlog);
export default comment