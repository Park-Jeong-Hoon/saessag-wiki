import express from "express";
import { getChangePasswd, getEdit, logout, postEdit, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/change-password", getChangePasswd);
userRouter.get("/:id", see);

export default userRouter;