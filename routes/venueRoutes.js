import express from 'express';
const router = express.Router();

import {
  getAllVenues,
  getSingleVenue,
  addVenue,
  updateVenue,
  deleteVenue,
} from '../controllers/VenueController.js';

router.route('/').get(getAllVenues).post(addVenue);
router.route('/:id').get(getSingleVenue).patch(updateVenue).delete(deleteVenue);

export default router;
