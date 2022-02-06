import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    word: { type: String },
    explanation: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Content = mongoose.model("Content", contentSchema);

export default Content;