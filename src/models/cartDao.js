const { AppDataSource } = require("./data-source");

const addCart = async (userId, productId, quantity) => {
  const result = await AppDataSource.query(
    `
      INSERT INTO cart(
      user_id,
      product_id,
      quantity
      )
      values(?,?,?);`,
    [userId, productId, quantity]
  );
  return result;
};

const checkCart = async (userId) => {
  const result = await AppDataSource.query(
    `
      SELECT 
        c.id,
        c.user_id,
        c.product_id,
        c.quantity,
        p.name,
        FLOOR(p.price),
        p.detail_image
      FROM cart c
      JOIN products p ON c.product_id = p.id
      WHERE c.user_id = ?
      `,
    [userId]
  );
  return result;
};

const changeCart = async (quantity, cartId, userId) => {
  const result = await AppDataSource.query(
    `
      UPDATE cart
      SET quantity = ?
      WHERE id= ? AND user_id= ?
  `,
    [quantity, cartId, userId]
  );
  return result;
};

const deleteCart = async (userId, cartId) => {
  const result = await AppDataSource.query(
    `
      DELETE FROM cart
      WHERE id = ? AND user_id = ?
  `,
    [cartId, userId]
  );
  return result;
};

module.exports = {
  addCart,
  checkCart,
  changeCart,
  deleteCart,
};
