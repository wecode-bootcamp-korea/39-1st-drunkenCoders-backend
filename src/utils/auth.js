const jwt = require("jsonwebtoken");
const key = process.env.JWT_SECRET;
const validToken = async (req, res, next) => {
  try {
    const userToken = req.headers.authorization;

    if (!userToken) return res.status(400).json({ message: "Auth error" });

    const decoded = jwt.verify(userToken, key);
    const { userId } = decoded;

    req.userId = userId;
    return next();
  } catch (err) {
    const error = new Error("Invalid token");
    error.statusCode = 400;
    next(error);
  }
};
module.exports = { validToken };
