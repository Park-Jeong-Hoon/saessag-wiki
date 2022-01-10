export const getHome = (req, res) => {
    res.render("home", {pageTitle: "home"});
}

export const getSearch = (req, res) => {
    res.render("search");
}

export const getSee = (req, res) => {
    res.send("SeeContent");
}

export const getUpload = (req, res) => {
    res.send("upload");
}

export const getEdit = (req, res) => {
    res.send("Edit");
}

export const getDelete = (req, res) => {
    res.send("Delete");
}