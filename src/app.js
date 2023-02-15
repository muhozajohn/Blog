import  express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoute from './routes/user'
import blogRoute from './routes/blog'
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc  from "swagger-jsdoc";
import commentRouter from "./routes/comment";
import morgan from "morgan";

const app = express();
// swagger definition
const options = {
  swaggerDefinition: {
      openapi: '3.0.1',
      info: {
          title: 'My APIs documentation',
          version: '1.0.0',
          description: 'This is my API documentation'
      },
      components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                name: 'Authorization',
                in: 'header',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [{
        bearerAuth: []
    }],
  },
  apis: ['./src/docs/*.js'],
}
  

  const specs = swaggerJSDoc(options);


// middleWare
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));
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

