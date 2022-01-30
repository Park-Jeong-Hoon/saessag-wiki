import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    word: { type: String },
    explanation: { type: String }
});

const Content = mongoose.model("Content", contentSchema);

export default Content;