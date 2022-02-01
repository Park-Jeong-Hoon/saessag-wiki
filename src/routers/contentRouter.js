import express from "express";
import { getDelete, getEdit, getUpload, postUpload, see } from "../controllers/contentController";

const contentRouter = express.Router();

contentRouter.get("/:id([0-9a-f]{24})", see);
contentRouter.route("/upload").get(getUpload).post(postUpload);
contentRouter.get("/:id([0-9a-f]{24})/edit", getEdit);
contentRouter.get("/:id([0-9a-f]{24})/delete", getDelete);

export default contentRouter;