const cartDao = require("../models/cartDao");

const addCart = async (userId, productId, quantity) => {
  return await cartDao.addCart(userId, productId, quantity);
};

const checkCart = async (userId) => {
  return await cartDao.checkCart(userId);
};

const changeCart = async (quantity, cartId, userId) => {
  return await cartDao.changeCart(quantity, cartId, userId);
};

const deleteCart = async (userId, cartId) => {
  return await cartDao.deleteCart(userId, cartId);
};

module.exports = {
  addCart,
  checkCart,
  changeCart,
  deleteCart,
};
