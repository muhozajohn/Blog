import express from "express";
import upload from "../helper/multer";
import { postBlog,getAllBlog,getBlogById,updateBlog,deleteBlog } from "../controllers/blogController";
import { Authorization } from "../middleware/Authorization";

const blogRouter = express.Router();

// routes
blogRouter.post("/blogPost", Authorization,upload.single("image"), postBlog);
blogRouter.get("/getAll",getAllBlog);
blogRouter.get("/:id", getBlogById);
blogRouter.put("/upBlog/:id",upload.single("image"), updateBlog);
blogRouter.delete("/delBlog/:id", deleteBlog);




export default blogRouter;

