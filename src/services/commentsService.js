const commentsDao = require("../models/commentsDao");

const getCommentsByProductId = async (productId) => {
    console.log(productId)
    const comments = await commentsDao.getCommentsByProductId(productId)

    return comments
}

module.exports = {getCommentsByProductId}