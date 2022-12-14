const commentsService = require("../services/commentsService");

const getCommentsByProductId = async (req,res) => {
    const {productId} = req.query;
    const comments = await commentsService.getCommentsByProductId(productId);

    return res.status(200).json({data:comments})
};

module.exports = {getCommentsByProductId}