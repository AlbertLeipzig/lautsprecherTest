import express from 'express'
const router = express.Router();

import {
  getAllOrganizers,
  getSingleOrganizer,
  addOrganizer,
  updateOrganizer,
  deleteOrganizer,
} from '../controllers/organizerController.js'

router.route('/').get(getAllOrganizers).post(addOrganizer);
router
  .route('/:id')
  .get(getSingleOrganizer)
  .patch(updateOrganizer)
  .delete(deleteOrganizer);

export default router;
