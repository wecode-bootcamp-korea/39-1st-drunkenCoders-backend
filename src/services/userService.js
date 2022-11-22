const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");
const { validateEmail } = require("../utils/validation");
const { validatePassword } = require('../utils/validation');
const { usersRouter } = require('../routes/usersRoutes');


const register = async (email, password, nickname) => {
    validateEmail(email);
    validatePassword(password);

    const user = await userDao.getUserByEmail(email);

    if (user) {
        const err = new Error("duplicated email");
        err.statusCode = 400;
        throw err;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return await userDao.createUser(email, hashedPassword, nickname);
}


const login = async (email, password) => {
    const user = await userDao.getUserByEmail(email);

    if(!email.includes("@") || !email.includes(".")){
        const err = new Error("invalid email")
        err.statusCode= 400;
        throw err;
    }

    if (!user) {
        const err = new Error("invalid user");
        err.statusCode = 404;
        throw err; 
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        const err = new Error("invalid password");
        err.statusCode = 401;
        throw err;
    }

    return jwt.sign({ sub: user.id}, process.env.JWT_SECRET);
};

module.exports = { register, login };
