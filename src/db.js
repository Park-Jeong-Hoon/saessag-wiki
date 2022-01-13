import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/sassagwiki");

const db = mongoose.connection;

const funOpen = () => console.log("✅ DB Connected");
const funErr = (err) => console.log("❌DB Error", err);

db.on("error", funErr);
db.once("open", funOpen);