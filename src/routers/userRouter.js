import express from "express";
import { getEdit, getSee } from "../controllers/contentController";
import { getChangePasswd, getLogout } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id(\\d+)", getSee);
userRouter.get("/logout", getLogout);
userRouter.get("/edit", getEdit);
userRouter.get("/change-password", getChangePasswd);

export default userRouter;