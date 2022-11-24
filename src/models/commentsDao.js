const { AppDataSource } = require("./data-source");

const getCommentsByProductId = async (productId) => {
    const comments = await AppDataSource.query(
        `
        SELECT 
            c.id,
            p.name title, 
            CAST(c.rating*100/5 AS UNSIGNED) AS rating, 
            DATE_FORMAT(
                c.created_at, '%Y-%c-%d'
                ) as date, 
            c.title as text1, 
            c.content as text2, 
            u.nick_name, 
            ci.image_url
        FROM comments c 
        LEFT JOIN users u ON u.id = c.user_id 
        LEFT JOIN comments_images ci ON ci.comment_id = c.id 
        JOIN products p ON p.id = c.product_id
        WHERE c.product_id = ?;
        `,
        [productId]
    )
    return comments
}

module.exports = {getCommentsByProductId}