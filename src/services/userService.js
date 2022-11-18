const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/user.dao");
const { validateEmail } = require("../utils/validation");
const { validatePassword } = require('../utils/validation');
const { usersRouter } = require('../routes/userRouter');


const register = async (email, password, nickname) => {
    validateEmail(email);
    validatePassword(password);

    const user = await userDao.getUserByEmail(email);

    if (user) {
        const err = new Error("이미 가입된 이메일입니다.");
        err.statusCode = 400;
        throw err;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return await userDao.createUser(email, hashedPassword, nickname);
}


const login = async (email, password) => {
    const user = await userDao.getUserByEmail(email);

    if(!email.includes("@") || !email.includes(".")){
        const err = new Error("이메일양식을 다시 확인해주세요.")
        err.statusCode= 400;
        throw err;
    }

    if (!user) {
        const err = new Error("존재하지않는 회원입니다.");
        err.statusCode = 404;
        throw err; 
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        const err = new Error("비밀번호가 다릅니다.");
        err.statusCode = 401;
        throw err;
    }

    return jwt.sign({ sub: user.id}, process.env.JWT_SECRET);
};

module.exports = { register, login };
