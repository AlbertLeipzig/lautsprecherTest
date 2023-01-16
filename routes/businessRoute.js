import express from 'express';
const router = express.Router();

import {
  getAllBusiness,
  getSingleBusiness,
  addBusiness,
  updateBusiness,
  deleteBusiness,
} from '../controllers/BusinessController.js';

router.route('/').get(getAllBusiness).post(addBusiness);
router
  .route('/:id')
  .get(getSingleBusiness)
  .patch(updateBusiness)
  .delete(deleteBusiness);

export default router;
