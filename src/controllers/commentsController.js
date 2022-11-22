const commentsService = require("../services/commentsService");

const getCommentsByProductId = async (req,res) => {
    const {productId} = req.params;

    // if(!productId){
    //     const err = new Error("KEY ERROR");
    //     err.statuscode = 400;
    //     throw err
    // };

    const comments = await commentsService.getCommentsByProductId(productId);

    return res.status(200).json({data:comments})
};

module.exports = {getCommentsByProductId}