import "./db";
import "./models/User";
import app from "./server";

const port = 4000;
app.listen(port, () => {console.log("✅ listen 4000 port")})