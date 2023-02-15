import express from "express";
import { signUp, login, getAllUsers,getAllUsersId,updateUser,deleteUser } from "../controllers/userController";
import upload from "../helper/multer";

const userRouter = express.Router();


userRouter.post("/signup",upload.single("image"), signUp);
userRouter.post("/signin",upload.single("image"), login);
userRouter.get("/users", getAllUsers);
userRouter.get("/:id", getAllUsersId);
userRouter.delete("/delete/:id", deleteUser);
userRouter.put("/update/:id",upload.single("image"), updateUser);

export default userRouter;