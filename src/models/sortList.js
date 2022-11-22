const makeSort = (sort) => {
    const sorting = {
      latest: "created_at DESC",
      rating: "ratings DESC",
      review: "reviews DESC",
      priceLow: "price ASC",
      priceHigh: "price DESC",
    };
    let order = sorting[sort];
    if (!order) {
      order = "p.id IS NOT NULL";
      return {toSqlString: function () {return order;},};
    } else {
      return {toSqlString: function () {return order;},};
    }
  };

  module.exports = {makeSort}
