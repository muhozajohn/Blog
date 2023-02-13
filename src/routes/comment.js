import express from "express";
import { SingleBlog,getAllcoment,getAllcomentById,delComent,upComent } from "../controllers/commentController";
import upload from "../helper/multer";
import { Authorization } from "../middleware/Authorization";
const commentRouter = express.Router();

commentRouter.post('/addcomment/:id',Authorization,upload.single("image"),SingleBlog);
commentRouter.get('/getAll',getAllcoment);
commentRouter.get('/:id',getAllcomentById);
commentRouter.delete('/delComent/:id',delComent);
commentRouter.put('/upComent/:id',upload.single("image"),upComent);

export default commentRouter;