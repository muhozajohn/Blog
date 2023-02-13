import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
     role: {
        type: String,
        require: true
      },
},{
    timestamps: true
});



const user = mongoose.model("users", userSchema);

export default  user;