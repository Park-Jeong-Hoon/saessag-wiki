import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);

const getHome = (req, res) => {
    res.render("home");
}

app.get("/", getHome);

app.listen(4000, () => {console.log("listen 4000 port")})