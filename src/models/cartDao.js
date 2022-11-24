const { AppDataSource } = require("./data-source");

const addCart = async (userId, productId, quantity) => {
  await AppDataSource.query(
    `
      INSERT INTO cart(
      user_id,
      product_id,
      quantity
      )
      values(?,?,?);`,
    [userId, productId, quantity]
  );
};

const checkCart = async (userId) => {
  const check = await AppDataSource.query(
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
  return check;
};

const changeCart = async (quantity, cartId, userId) => {
  await AppDataSource.query(
    `
      UPDATE cart
      SET quantity = ?
      WHERE cart.id= ? AND user.id= ?
  `,
    [quantity, cartId, userId]
  );
};

const deleteCart = async (cartId) => {
  await AppDataSource.query(
    `
      DELETE FROM cart
      WHERE id = ?
  `,
    [cartId]
  );
};

module.exports = {
  addCart,
  checkCart,
  changeCart,
  deleteCart,
};
