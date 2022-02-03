import Content from "../models/Content";

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
        word, explanation
    } = req.body;

    try {
        const newContent = await Content.create({
            word,
            explanation
        })
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

export const getDelete = (req, res) => {
    res.send("Delete");
}