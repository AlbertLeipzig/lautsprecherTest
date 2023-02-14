import express from 'express';
const router = express.Router();

import { postMessage } from '../controllers/messageController.js';

router.route('/').post(postMessage);

export default router;