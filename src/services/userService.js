const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userDao = require("../models/userDao");
const { validateEmail } = require("../utils/validation");
const { validatePassword } = require("../utils/validation");

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
};

const login = async (email, password) => {
  console.log(email)
  const user = await userDao.getUserByEmail(email);
  console.log(user)

  if (!email.includes("@") || !email.includes(".")) {
    const err = new Error("invalid email");
    err.statusCode = 400;
    throw err;
  }

  if (!user) {
    const err = new Error("invalid user");
    err.statusCode = 404;
    throw err;
  }
  const match = await bcrypt.compare(password, user.password);
  console.log(match)
  if (!match) {
    const err = new Error("invalid password");
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign({ userId: user.id }, 'kims1074');
};

const checknick = async (nickname) => {
  const nick = await userDao.getUserByNickname(nickname);
  if (nick) {
    const err = new Error("duplicated nickname");
    err.statusCdoe = 400;
    throw err;
  }
};

module.exports = { register, login, checknick };
