const productsDao = require("../models/productsDao");
const whereList = require("../utils/whereList")

const getAllProducts = async (
  cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange , alchol , sort) => {
    const sortCate = (sort) => {
    const sorting = {
      latest: "created_at DESC",
      rating: "ratings DESC",
      review: "reviews DESC",
      priceLow: "price ASC",
      priceHigh: "price DESC",
    };
    let order = sorting[sort];
    if (!order) {
      order = "NULL";
      return {toSqlString: function () {return order;},};
    } else {
      return {toSqlString: function () {return order;},};
    }
  };

  const whereCond = whereList.makeWhereList(cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange , alchol)

  const products = await productsDao.getAllProducts(
    whereCond,
    sortCate(sort)
  );
  return products;
};

const getProductDetails = async (productId) => {
  return await productsDao.getProductDetails(productId);
}

module.exports = { getAllProducts, getProductDetails };
