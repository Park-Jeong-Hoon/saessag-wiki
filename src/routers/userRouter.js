import express from "express";
import { getChangePasswd, getEdit, getSee, logout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", getEdit);
userRouter.get("/change-password", getChangePasswd);
userRouter.get("/:id", getSee);

export default userRouter;