const cartServices = require("../services/cartServices");

const addCart = async (req, res) => {
  const userId = req.userId;

  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    const err = new Error("KEY ERROR");
    err.status = 400;
    throw err;
  }
  await cartServices.addCart(userId, productId, quantity);
  return res.status(201).json({ message: "SUCCESS" });
};

const checkCart = async (req, res) => {
  try {
    const userId = req.userId;
    // prettier-ignore
    const check = await cartServices.checkCart(userId);
    // prettier-ignore
    return res.status(200).json({ data: check });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const changeCart = async (req, res) => {
  try {
    const { quantity, cartId, userId } = req.body;

    if (!quantity || !cartId || !userId) {
      res.status(400).json({ message: "change cart pls." });
    }
    await cartServices.changeCart(quantity, cartId, userId);

    return res.status(201).json({ message: "change cart ok." });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const delateCart = async (req, res) => {
  const { userId, cartId } = req.body;
  try {
    if (!userId || !cartId) {
      // prettier-ignore
      res.status(400).json({ message: 'check the user inf again pls.' });
    }
    await cartServices.deleteCart(userId, cartId);

    return res.status(201).json({ message: "cart is removed." });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  addCart,
  checkCart,
  changeCart,
  delateCart,
};
