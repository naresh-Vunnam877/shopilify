import express from 'express';
import shippingController from './shippingController.js'
const {
  getShippingInfo,
  addShippingInfo,
  updateShippingInfo,
  deleteShippingInfo,
} = shippingController

const router = express.Router();

router.get('/', getShippingInfo);
router.post('/', addShippingInfo);
router.put('/:id', updateShippingInfo);
router.delete('/:id', deleteShippingInfo);

export default router;
