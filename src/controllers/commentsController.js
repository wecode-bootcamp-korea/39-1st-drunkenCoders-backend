const commentsService = require("../services/commentsService");

const getCommentsByProductId = async (req,res) => {
<<<<<<< HEAD
    const {productId} = req.params;
=======
    const {productId} = req.query;
>>>>>>> main
    const comments = await commentsService.getCommentsByProductId(productId);

    return res.status(200).json({data:comments})
};

module.exports = {getCommentsByProductId}