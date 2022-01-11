import express from "express";
import { getHome, getSearch } from "../controllers/contentController";
import { getJoin, getLogin, postJoin } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", getHome);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", getLogin);
rootRouter.get("/search", getSearch);

export default rootRouter;