import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
}

export const postJoin = async (req, res) => {
    const { username, password, password2, name } = req.body;
    const pageTitle = "Join";
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
    res.render("login", { pageTitle: "Login" });
}

export const postLogin = async (req, res) => {
    const { username, password } = req.body;
    const pageTitle = "Login";
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).render("login", {
            pageTitle,
            errorMassage: "방금 입력하신 아이디는 존재하지 않습니다."
        });
    };

    const ok = await bcrypt.compare(password, user.password);
    if(!ok) {
        return res.status(400).render("login", {
            pageTitle,
            errorMassage: "비밀번호가 일치하지 않습니다."
        });
    }

    req.session.loggedIn = true;
    req.session.user = user;

    return res.redirect("/");
}

export const logout = (req, res) => {
    req.session.destroy();
    return res.redirect("/");
}

export const getSee = (req, res) => {
    res.render("profile", { pageTitle: "Profile" });
}

export const getEdit = (req, res) => {
    res.send("Edit");
}

export const getChangePasswd = (req, res) => {
    res.send("Change Passwd");
}