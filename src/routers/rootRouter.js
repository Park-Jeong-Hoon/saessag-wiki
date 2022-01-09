import express from "express";
import { getHome, getSearch } from "../controllers/contentController";
import { getJoin, getLogin } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", getHome);
rootRouter.get("/join", getJoin);
rootRouter.get("/login", getLogin);
rootRouter.get("/search", getSearch);

export default rootRouter;