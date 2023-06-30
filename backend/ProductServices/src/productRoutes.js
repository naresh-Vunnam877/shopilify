import express from 'express';
import productController from './productController.js';
const { getAllProducts, getProductById, createProduct, updateProduct ,deleteProduct} = productController
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
