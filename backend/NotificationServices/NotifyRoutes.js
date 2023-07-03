import express from 'express';
import { sendNotification } from './NotifyController';

const router = express.Router();

router.post('/', sendNotification);

export default router;
