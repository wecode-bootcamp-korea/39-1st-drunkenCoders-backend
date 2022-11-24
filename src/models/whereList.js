const makeWhereList = (
    cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange , alchol ) => {
    
    const startLine = "WHERE ";
    const filter = ["p.id IS NOT NULL"];
    
    if (typeof(cate_id) == 'object'){
      const orS = cate_id.map(el => `categories_id=${el}`).join(" or ")
        filter.push(orS);
      } else if (typeof(cate_id) == 'string'){
        filter.push(`categories_id=${cate_id}`)
      };
    if (typeof(sweetness) == 'object'){
      const orS = sweetness.map(el => `sweetness_id=${el}`).join(" or ")
        filter.push(orS);
      } else if (typeof(sweetness) == 'string'){
        filter.push(`sweetness_id=${sweetness}`)
      };
    if (typeof(sourness) == 'object'){
      const orS = sourness.map(el => `sourness_id=${el}`).join(" or ")
         filter.push(orS);
      } else if (typeof(sourness) == 'string'){
        filter.push(`sourness_id=${sourness}`)
      }
    if (typeof(carbon) == 'object'){
      const orS = carbon.map(el => `carbon_id=${el}`).join(" or ")
         filter.push(orS);
      } else if (typeof(carbon) == 'string'){
         filter.push(`carbon_id=${carbon}`)
      }
    if (typeof(fruit) == 'object'){
       const orS = fruit.map(el => `fruit_id=${el}`).join(" or ")
         filter.push(orS);
      } else if (typeof(fruit) == 'string'){
         filter.push(`fruit_id=${fruit}`)
      }
    if (typeof(flower) == 'object'){
       const orS = flower.map(el => `flower_id=${el}`).join(" or ")
         filter.push(orS);
      } else if (typeof(flower) == 'string'){
         filter.push(`flower_id=${flower}`)
      }
    if (typeof(grain) == 'object'){
      const orS = grain.map(el => `grain_id=${el}`).join(" or ")
        filter.push(orS);
    } else if (typeof(grain) == 'string'){
        filter.push(`grain_id=${grain}`)
    }
    if (priceRange) {
      filter.push(`price BETWEEN ${priceRange[0]} AND ${priceRange[1]}`);
    }
    if (alchol) {
      filter.push(`alchol BETWEEN ${alchol[0]} AND ${alchol[1]}`)
    }
    const body = filter.join(" AND ");
    const combined = startLine + body;
    console.log(combined)
    return {
      toSqlString: function () {
        return combined;
      },
    };
  };

module.exports = {makeWhereList}