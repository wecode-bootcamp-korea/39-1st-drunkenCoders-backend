const { appDataSource } = require("./data-source");

const getAllProducts = async (whereCond, sortCate) => {
  const getAllProducts = await appDataSource.query(
    `
    SELECT 
        p.id,
        p.name, 
        p.price, 
        pi.image_url, 
    JSON_ARRAYAGG(
        JSON_OBJECT(
            "tags",t.name
            )) as tags, 
    (SELECT 
        COUNT(c.title) 
        FROM comments c 
        WHERE c.product_id = p.id 
        GROUP BY c.product_id) as reviews, 
    (SELECT 
        ROUND(AVG(c.rating)*100/5,2) 
        FROM comments c 
        WHERE c.product_id = p.id 
        GROUP BY c.product_id) as ratings 
    FROM products p 
    LEFT JOIN product_images pi ON p.id = pi.product_id 
    LEFT JOIN tags t ON p.id = t.product_id
    ?
    GROUP BY p.id, pi.image_url
    ORDER BY ?;
    `,
    [whereCond, sortCate]
  );
  return getAllProducts;
};

const getProductDetails = async (productId) => {
  const details = await appDataSource.query(
    `
    SELECT 
      p.name, 
      p.price, 
      pi.image_url, 
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "tags",t.name
          )) as tags, 
    (SELECT 
      COUNT(c.title) 
      FROM comments c 
      WHERE c.product_id = p.id 
      GROUP BY c.product_id) as reviews, 
    (SELECT 
      AVG(c.rating)*100/5 
      FROM comments c 
      WHERE c.product_id = p.id 
      GROUP BY c.product_id) as ratings, 
    (SELECT 
      JSON_ARRAYAGG(
        JSON_OBJECT(
          "title",c.title,"content",c.content)) 
      FROM comments c 
      WHERE c.product_id = p.id 
      GROUP BY product_id) as posts
    FROM products p  
    LEFT JOIN product_images pi ON p.id = pi.product_id  
    LEFT JOIN tags t ON p.id = t.product_id
    WHERE p.id = ?  
    GROUP BY p.id, pi.image_url;
    `,
    [productId]
  );
  return details
}

module.exports = { getAllProducts , getProductDetails };
