export const getJoin = (req, res) => {
    res.render("join")
}

export const getLogin = (req, res) => {
    res.render("login");
}

export const getLogout = (Req, res) => {
    res.send("Logout");
}

export const getSee = (req, res) => {
    res.send("SeeUser");
}

export const getEdit = (req, res) => {
    res.send("Edit");
}

export const getChangePasswd = (req, res) => {
    res.send("Change Passwd");
}