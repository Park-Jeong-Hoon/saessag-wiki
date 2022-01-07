import express from "express";
import { getHome } from "../controllers/contentController";

const rootRouter = express.Router();

rootRouter.get("/", getHome);

export default rootRouter;