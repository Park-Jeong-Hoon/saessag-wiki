import express from "express";
import { getDelete, getEdit, getSee, getUpload } from "../controllers/contentController";

const contentRouter = express.Router();

contentRouter.get("/:id(\\d+)", getSee);
contentRouter.get("/upload", getUpload);
contentRouter.get("/:id(\\d+)/edit", getEdit);
contentRouter.get("/:id(\\d+)/delete", getDelete);

export default contentRouter;