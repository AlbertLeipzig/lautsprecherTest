import express from 'express';
const router = express.Router();

import {
  getSingleBand,
  addSingleBand,
  updateSingleBand,
  deleteSingleBand,
  getAllBands,
  addManyBands,
  updateManyBands,
  deleteManyBands,
} from '../controllers/bandController.js';

router.route('/').get(getAllBands).post(addSingleBand);
router.route("/many").post(addManyBands).patch(updateManyBands).delete(deleteManyBands);
router.route('/:id').get(getSingleBand).patch(updateSingleBand).delete(deleteSingleBand);

export default router;
