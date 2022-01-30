import express from "express";
import { getDelete, getEdit, getSee, getUpload, postUpload } from "../controllers/contentController";

const contentRouter = express.Router();

contentRouter.get("/:id(\\d+)", getSee);
contentRouter.route("/upload").get(getUpload).post(postUpload);
contentRouter.get("/:id(\\d+)/edit", getEdit);
contentRouter.get("/:id(\\d+)/delete", getDelete);

export default contentRouter;