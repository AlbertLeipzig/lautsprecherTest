import express from 'express';
const router = express.Router();

import {
  getSingleBusiness,
  addSingleBusiness,
  updateSingleBusiness,
  deleteSingleBusiness,
  getAllBusiness,
  addManyBusiness,
  updateManyBusiness,
  deleteManyBusiness,
} from '../controllers/businessController.js';

router.route('/').get(getAllBusiness).post(addSingleBusiness);
router
  .route('/many')
  .post(addManyBusiness)
  .patch(updateManyBusiness)
  .delete(deleteManyBusiness);
router
  .route('/:id')
  .get(getSingleBusiness)
  .patch(updateSingleBusiness)
  .delete(deleteSingleBusiness);

export default router;
