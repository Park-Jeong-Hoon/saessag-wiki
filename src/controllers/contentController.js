import req from "express/lib/request";
import Content from "../models/Content";
import User from "../models/User";

export const getHome = async (req, res) => {
    const contents = await Content.find({});
    res.render("home", { pageTitle: "Home", contents });
}

export const getSearch = async (req, res) => {
    const keyword = req.query.keyword;
    const contents = await Content.find({
        word: {
            $regex: new RegExp(`${keyword}`, "i")
        }
    });
    res.render("home", { pageTitle: `Searched ${keyword}`, contents });
}

export const see = async (req, res) => {
    const { id } = req.params;
    const content = await Content.findById(id);
    if (!content) {
        res.status(404).render("404", { pageTitle: "해당 단어에 관한 내용이 없습니다." })
    }
    res.render("see-content", { pageTitle: "See-Content", content });
}

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" });
}

export const postUpload = async (req, res) => {
    const {
        session: {
            user: _id
        },
        body: {
            word,
            explanation
        }
    } = req;

    try {
        const newContent = await Content.create({
            word,
            explanation,
            owner: _id
        });
        const user = await User.findById(_id);
        user.contents.push(newContent._id);
        user.save();
        return res.redirect("/");
    } catch (error) {
        return res.status(400).render("upload", {
            pageTitle: "Upload Content",
            errorMassage: error._errorMassage
        });
    }
}

export const getEdit = async (req, res) => {
    const { id } = req.params;
    const content = await Content.findById(id);
    if (!content) {
        res.status(404).render("404", { pageTitle: "해당 단어에 관한 내용이 없습니다." })
    }
    res.render("edit", { pageTitle: "Edit", content });
}

export const postEdit = async (req, res) => {
    const {id} = req.params;
    const {word, explanation} = req.body;
    
    await Content.findByIdAndUpdate(id, {
        word,
        explanation
    })
    res.redirect("/");
}

export const deleteContent = async (req, res) => {
    const { id } = req.params;
    const content = await Content.findById(id);
    if (!content) {
        res.status(404).render("404", { pageTitle: "해당 단어에 관한 내용이 없습니다." })
    }
    await Content.findByIdAndDelete(id);
    res.redirect("/");
}