const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/user.dao");
const { validateEmail } = require("../utils/validators");
const { validatePassword } = require('../utils/validation');

const signUp = async (email, password, nickname) => {
    validateEmail(email);
    validatePassword(password);

    const hashedPassword = await bcrypt.hash(password, 10);
    await userDao.createUser(email, hashedPassword);

    const user = await userDao.getUserByEmail(email);
    
    if (user) {
        const err = new Error("이미 가입된 이메일입니다.");
        err.statusCode = 400;
        throw err;
    }
    return await userDao.createUser(email, hashedPassword, nickname)
}

const signIn = async (email, password) => {
    const user = await userDao.getUserByEmail(email);

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

    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
};



// const hashPassword = async (password)=>{
//     const saltRounds =10;
//     const salt = await bcrypt.genSalt(saltRounds);
//}

module.exports = { signUp, signIn };
