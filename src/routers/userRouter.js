import express from "express";
import { getEdit, getSee } from "../controllers/contentController";
import { getChangePasswd, logout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", getSee);
userRouter.get("/logout", logout);
userRouter.get("/edit", getEdit);
userRouter.get("/change-password", getChangePasswd);

export default userRouter;