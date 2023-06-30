import Product from '../../ProductServices/src/productModels.js';

export const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    const results = await Product.find({ $text: { $search: query } });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error});
  }
};
