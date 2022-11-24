const commentsDao = require("../models/commentsDao");

const getCommentsByProductId = async (productId) => {
    const comments = await commentsDao.getCommentsByProductId(productId)
    if(!comments){
        const err = new Error("NO REVIEWS")
        err.statuscode = 204
        throw err
    }
    return comments
}

module.exports = {getCommentsByProductId}