const { AppDataSource } = require("./data-source");

const getAllProducts = async (whereCond, sortCate) => {
  const getAllProducts = await AppDataSource.query(
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
  const details = await AppDataSource.query(
    `
    SELECT 
      p.id,
      p.name as product_name, 
      p.description, 
      p.price, 
      pi.image_url, 
      p.capacity_ml, 
      p.alchol, 
      cate.name, 
      p.detail_image,
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
      GROUP BY c.product_id) as ratings
    FROM products p 
    LEFT JOIN product_images pi ON p.id = pi.product_id
    LEFT JOIN tags t ON p.id = t.product_id 
    LEFT JOIN categories cate ON p.categories_id = cate.id
    WHERE p.id = ?
    GROUP BY p.id, pi.image_url;
    `,
    [productId]
  );
  return details
}

module.exports = { getAllProducts , getProductDetails };
