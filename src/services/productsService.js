const productsDao = require("../models/productsDao");

const productsAll = async (sort) => {
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
      return (order = "NULL");
    } else {
      return order;
    }
  };

  console.log(sortCate(sort));

  const products = await productsDao.productsAll(sortCate(sort));
  return products;
};

module.exports = { productsAll };
