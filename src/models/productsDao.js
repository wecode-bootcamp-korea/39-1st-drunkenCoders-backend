const { AppDataSource } = require("./data-source");
const  whereList  = require("./whereList")
const sortList = require("./sortList")
const limitAndOffset = require("./limitAndOffset")

const getAllProducts = async (cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange , alchol, sort , limit, offset) => {

  const whereCond = whereList.makeWhereList(cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange , alchol);
  const sortCategory = sortList.makeSort(sort);
  const limitOffset = limitAndOffset.setLimitOffset(limit, offset);

  const productsAll = await AppDataSource.query(
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
    ORDER BY ?
    ?;
    `,
    [whereCond, sortCategory , limitOffset]
  );
  return productsAll;
};

const getProductDetails = async (productId) => {
  const details = await AppDataSource.query(
    `
    SELECT 
      p.id,
      p.name as product_name, 
      p.description, 
      ROUND(p.price,0) as price, 
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
      ROUND(AVG(c.rating)*100/5,0)
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
