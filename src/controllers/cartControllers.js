const cartServices = require('../services/cartServices');

const addCart = async (req, res) => {
  try {
    const { cartId, userId, productId, quantity } = req.body;

    if (!cartId || !userId || !productId || !quantity) {
      res.status(400).json({ message: 'key error.' });
    }
    await cartServices.addCart(cartId, userId, productId, quantity);

    res.status(201).json({ message: 'cart is added.' });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const checkCart = async (req, res) => {
  try {
    const { token } = req.headers;
    const result = await cartService.cartToken(token);
    if (!token) {
      // prettier-ignore
      res.status(400).json({ message: 'check inf again pls.' });
    }

    await cartServices.checkCart(token);
    // prettier-ignore
    res.status(200).json({ message: 'check ok.', data: result });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const changeCart = async (req, res) => {
  try {
    const { quantity, price } = req.body;

    if (!quantity || !price) {
      res.status(400).json({ message: 'change cart pls.' });
    }
    await cartServices.changeCart(quantity, price);

    res.status(201).json({ message: 'change cart ok.' });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const delateCart = async (req, res) => {
  try {
    const { cartId } = req.body;

    if (!cartId) {
      // prettier-ignore
      res.status(400).json({ message: 'check the user inf again pls.' });
    }
    await cartServices.delateCart(cartId);

    res.status(201).json({ message: 'cart is removed.' });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { addCart, checkCart, changeCart, delateCart };
