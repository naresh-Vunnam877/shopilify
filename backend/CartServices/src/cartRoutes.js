import express from 'express';
import cartController from './cartController.js';
const {
  getCartItems,
  addToCart,
  updateCartItem,
  removeCartItem,
} = cartController ;

const router = express.Router();

router.get('/', getCartItems);
router.post('/', addToCart);
router.put('/:id', updateCartItem);
router.delete('/:id', removeCartItem);

export default router;
