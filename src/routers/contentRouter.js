import express from "express";
import { see, getUpload, postUpload, getEdit, postEdit, deleteContent } from "../controllers/contentController";

const contentRouter = express.Router();

contentRouter.get("/:id([0-9a-f]{24})", see);
contentRouter.route("/upload").get(getUpload).post(postUpload);
contentRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
contentRouter.get("/:id([0-9a-f]{24})/delete", deleteContent);

export default contentRouter;