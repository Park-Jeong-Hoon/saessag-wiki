import Content from "../models/Content";

export const getHome = (req, res) => {
    res.render("home", {pageTitle: "home"});
}

export const getSearch = (req, res) => {
    const keyword = req.query.keyword;
    console.log(keyword);
    res.render("search", { pageTitle: `searched ${keyword}`, keyword });
}

export const getSee = (req, res) => {
    res.send("SeeContent");
}

export const getUpload = (req, res) => {
    res.render("upload", {pageTitle: "upload"});
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

export const getEdit = (req, res) => {
    res.send("Edit");
}

export const getDelete = (req, res) => {
    res.send("Delete");
}