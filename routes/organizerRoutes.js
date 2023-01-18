import express from 'express';
const router = express.Router();

import {
  getSingleOrganizer,
  addSingleOrganizer,
  updateSingleOrganizer,
  deleteSingleOrganizer,
  getAllOrganizers,
  addManyOrganizers,
  updateManyOrganizers,
  deleteManyOrganizers,
} from '../controllers/organizerController.js';

router.route('/').get(getAllOrganizers).post(addSingleOrganizer);
router
  .route('/many')
  .post(addManyOrganizers)
  .patch(updateManyOrganizers)
  .delete(deleteManyOrganizers);
router
  .route('/:id')
  .get(getSingleOrganizer)
  .patch(updateSingleOrganizer)
  .delete(deleteSingleOrganizer);

export default router;
