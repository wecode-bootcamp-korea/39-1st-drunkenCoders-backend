const cartDao = require('../models/cartDao');

const addCart = async (cartId, userId, productId, quantity) => {
  return await cartDao.addCart(cartId, userId, productId, quantity);
};
const checkCart = async (userId, cartId) => {
  return await cartDao.checkCart(userId, cartId);
};

const changeCart = async (quantity, price) => {
  return await cartDao.changeCart(quantity, price);
};

const deleteCart = async (cartId) => {
  return await cartDao.deleteCart(cartId);
};

module.exports = { addCart, checkCart, changeCart, deleteCart };
