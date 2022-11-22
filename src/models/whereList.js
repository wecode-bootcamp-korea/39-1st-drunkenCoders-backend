const makeWhereList = (
    cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange , alchol ) => {
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
    if (alchol) {
      filter.push(`alchol BETWEEN ${alchol[0]} AND ${alchol[1]}`)
    }
    const body = filter.join(" AND ");
    const combined = startLine + body;
    return {
      toSqlString: function () {
        return combined;
      },
    };
  };

module.exports = {makeWhereList}