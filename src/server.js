import express from "express";

const app = express();

const getHome = (req, res) => {
    res.send("hello");
}

app.get("/", getHome);

app.listen(4000, () => {console.log("listen 4000 port")})