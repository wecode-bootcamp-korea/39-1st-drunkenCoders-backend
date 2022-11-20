const productsDao = require("../models/productsDao");

const productsAll = async (
  cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange , sort) => {
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

  const whereList = (
    cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange) => {
    const startLine = "WHERE ";
    const filter = ["p.id IS NOT NULL"];
    if (cate_id) {
      filter.push(`categories_id=${cate_id}`);
    }
    if (sweetness) {
      filter.push(`sweetness_id=${sweetness}`);
    }
    if (sourness) {
      filter.push(`sourness_id=${sourness}`);
    }
    if (carbon) {
      filter.push(`carbon_id=${carbon}`);
    }
    if (fruit) {
      filter.push(`fruit_id=${fruit}`);
    }
    if (flower) {
      filter.push(`flower_id=${flower}`);
    }
    if (grain) {
      filter.push(`grain_id=${grain}`);
    }
    if (priceRange) {
      filter.push(`price BETWEEN ${priceRange[0]} AND ${priceRange[1]}`);
    }
    const body = filter.join(" AND ");
    const combined = startLine + body;
    return {
      toSqlString: function () {
        return combined;
      },
    };
  };

  const products = await productsDao.productsAll(
    whereList(cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange),
    sortCate(sort)
  );

  return products;
};

module.exports = { productsAll };
