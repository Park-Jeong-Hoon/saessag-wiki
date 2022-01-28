import express from "express";
import { getChangePasswd, getEdit, logout, postChangePasswd, postEdit, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.route("/change-password").get(getChangePasswd).post(postChangePasswd);
userRouter.get("/:id", see);

export default userRouter;