import express from "express";
import { getHome, getSearch } from "../controllers/contentController";
import { getJoin, getLogin, postJoin, postLogin } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", getHome);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", getSearch);

export default rootRouter;