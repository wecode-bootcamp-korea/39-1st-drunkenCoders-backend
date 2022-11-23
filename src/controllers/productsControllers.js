const productsService = require("../services/productsService");

const getAllProducts = async (req, res) => {
    const { cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange , alchol , sort , limit , offset} = req.query
    
    const products = await productsService.getAllProducts(
      cate_id , sweetness , sourness , carbon , fruit , flower , grain , priceRange , alchol , sort , limit , offset);
    
    return res.status(200).json({ data: products });
};

module.exports = { getAllProducts };
