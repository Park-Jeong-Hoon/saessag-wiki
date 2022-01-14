import "./db";
import "./models/User";
import express from "express";
import morgan from "morgan";
import contentRouter from "./routers/contentRouter";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({extended:true}));

app.use("/", rootRouter);
app.use("/contents", contentRouter);
app.use("/users", userRouter);

app.listen(4000, () => {console.log("✅ listen 4000 port")})