import express from 'express';
import { processPayment } from './PaymentController';

const router = express.Router();

router.post('/', processPayment);

export default router;
