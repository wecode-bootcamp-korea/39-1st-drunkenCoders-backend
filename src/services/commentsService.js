const commentsDao = require("../models/commentsDao");

const getCommentsByProductId = async (productId) => {
    const comments = await commentsDao.getCommentsByProductId(productId)
    return comments
}

module.exports = {getCommentsByProductId}