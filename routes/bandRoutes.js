import express from 'express';
const router = express.Router();

import {
  getAllBands,
  getSingleBand,
  addBand,
  updateBand,
  deleteBand,
} from '../controllers/BandController.js';

router.route('/').get(getAllBands).post(addBand);
router.route('/:id').get(getSingleBand).patch(updateBand).delete(deleteBand);

export default router;
