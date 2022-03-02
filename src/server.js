import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import { localMiddleware } from "./middlewares";
import contentRouter from "./routers/contentRouter";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev"); //morgan은 middleware를 return 해줌

app.set("view engine", "pug"); //뷰 엔진을 pug로 한다.
app.set("views", process.cwd() + "/src/views"); //보여주고 싶은 pug의 위치 값
app.use(logger); //morgan("dev") 이용
app.use(express.urlencoded({extended:true})); //express application이 form의 value들을 이해할 수 있게 하고 우리가 쓸 수 있는 JS 형식으로 변형시켜 준다.

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false, // resave와 saveUninitialized를 false로 해주면 세션을 수정할 때에만 세션을 DB에 저장하고 사용자에게 쿠키를 보낸다.
        store: MongoStore.create({ mongoUrl: process.env.DB_URL }) //세션을 MongoDB database에 저장할 수 있게 된다.
    })
);

app.use(localMiddleware); //로컬 미들웨어가 세션 미들웨어보다 뒤에 있어야 한다.
app.use("/static", express.static("assets")); //assets폴더 에 있는 것을 보여줌
app.use("/", rootRouter);
app.use("/contents", contentRouter);
app.use("/users", userRouter);

export default app;