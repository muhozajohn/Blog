import mongoose from "mongoose";
import app from './app'
import dotenv from "dotenv"
dotenv.config();

mongoose.set("strictQuery",false);
mongoose
.connect(process.env.DataDaseConn)
.then(()=>{
    console.log("Db Connected")
})
.catch((err) =>console.log(err))




const PORT = 5000;
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server Start at ${process.env.PORT  || PORT}`);
})