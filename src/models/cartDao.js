const { appDataSource } = require('./data-source');

const addCart = async (cartId, userId, productId, quantity) => {
  await appDataSource.query(
    `
      INSERT INTO cart(
      id,
      user_id,
      product_id,
      quantity
      )
      values(?,?,?,?);`,
    [cartId, userId, productId, quantity]
  );
};

const checkCart = async (cartId, userId) => {
  await appDataSource.query(
    `
      SELECT
        id,
        user_id,
        product_id,
        quantity,
        price
      FROM cart JOIN products
      ON cart.product_id = products.id
      `,
    [cartId, userId]
  );
};

const changeCart = async (cartId) => {
  await appDataSource.query(
    `
      UPDATE cart
      SET quantity = quantity + 1
  `,
    [cartId]
  );
};

const deleteCart = async (cartId) => {
  await appDataSource.query(
    `
      DELETE FROM cart
  `,
    [cartId]
  );
};

module.exports = { addCart, checkCart, changeCart, deleteCart };
