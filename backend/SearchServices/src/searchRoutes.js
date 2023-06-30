import express from 'express';
import { searchProducts } from './searchController.js';

const router = express.Router();

router.get('/', searchProducts);

export default router;
