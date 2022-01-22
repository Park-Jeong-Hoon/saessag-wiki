import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const funOpen = () => console.log("✅ DB Connected");
const funErr = (err) => console.log("❌DB Error", err);

db.on("error", funErr);
db.once("open", funOpen);