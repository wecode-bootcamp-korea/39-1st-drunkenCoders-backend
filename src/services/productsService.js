const productsDao = require("../models/productsDao");

const productsAll = async (sort) => {
  console.log(sort);
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
      return {
        toSqlString: function () {
          return order;
        },
      };
    } else {
      return {
        toSqlString: function () {
          return order;
        },
      };
    }
  };
  const products = await productsDao.productsAll(sortCate(sort));
  return products;
};

module.exports = { productsAll };
