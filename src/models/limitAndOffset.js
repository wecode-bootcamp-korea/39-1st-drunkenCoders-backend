const setLimitOffset = (limit, offset) => {
    if (!limit) limit = 10;
    if (!offset) offset = 0;
    return {
        toSqlString: function () {
            return ` LIMIT ${limit} OFFSET ${offset} `;
        },
    };
  };

module.exports = {setLimitOffset}