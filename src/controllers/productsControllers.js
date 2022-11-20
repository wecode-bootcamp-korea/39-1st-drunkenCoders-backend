const productsService = require("../services/productsService");

const productsAll = async (req, res) => {
  try {
    const { sort } = req.query;
    const products = await productsService.productsAll(sort);
    return res.status(200).json({ data: products });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { productsAll };
