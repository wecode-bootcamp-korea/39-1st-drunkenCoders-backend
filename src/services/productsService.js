const productsDao = require("../models/productsDao");

const getAllProducts = async (
  cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange , alchol , sort , limit , offset ) => {

  const products = await productsDao.getAllProducts(
    cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange , alchol , sort ,limit, offset );
    
  return products;
};

const getProductDetails = async (productId) => {
  return await productsDao.getProductDetails(productId);
}

module.exports = { getAllProducts, getProductDetails };
