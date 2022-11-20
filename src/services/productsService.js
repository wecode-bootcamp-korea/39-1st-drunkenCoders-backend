const productsDao = require("../models/productsDao");

const productsAll = async (cate_id, sort) => {
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

  const whereList = (cate_id) => {
    // "WHERE " "p.id IS NOT NULL"
    const startLine = "WHERE ";
    const filter = ["p.id IS NOT NULL"];
    if (cate_id) {
      filter.push(`categories_id= ${cate_id}`);
    }
    const body = filter.join(" AND ");
    const combined = startLine + body;
    return {
      function() {
        return combined;
      },
    };
  };

  const products = await productsDao.productsAll(
    whereList(cate_id),
    sortCate(sort)
  );

  return products;
};

module.exports = { productsAll };
