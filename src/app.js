import  express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from './routes/user'
import blogRoute from './routes/blog'
import commentRouter from "./routes/comment";
import morgan from "morgan";

const app = express();



// middleWare
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan("dev"))


// Routes
app.use("/api/v1/blog", blogRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/comment", commentRouter);





app.get("/", (req,res)=>{
    res.status(200).json({
        status: "success",
        message: "Welcome to Api"
    })
})

export default app;

