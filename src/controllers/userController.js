import User from "../models/User";

export const getJoin = (req, res) => {
    res.render("join")
}

export const postJoin = async (req, res) => {
    const { username, password, password2, name } = req.body;
    const pageTitle = "join";
    const exist = await User.exists({ username });

    if (exist) {
        return res.status(400).render("join", {
            pageTitle,
            errorMassage: "이미 존재하는 아이디입니다."
        });
    }

    if (password !== password2) {
        return res.status(400).render("join", {
            pageTitle,
            errorMassage: "비밀번호 확인이 옳지 않습니다."
        });
    };

    try {
        await User.create({
            username,
            password,
            name
        });
    } catch (error) {
        return res.status(400).render("join", {
            pageTitle,
            errorMassage: error._massage
        });
    };

    return res.redirect("/login");
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