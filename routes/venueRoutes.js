import express from 'express';
const router = express.Router();

import {
  getSingleVenue,
  addSingleVenue,
  updateSingleVenue,
  deleteSingleVenue,
  getAllVenues,
  addManyVenues,
  updateManyVenues,
  deleteManyVenues,
} from '../controllers/VenueController.js';

router.route('/').get(getAllVenues).post(addSingleVenue);
router.route("/many").post(addManyVenues).patch(updateManyVenues).delete(deleteManyVenues)
router.route('/:id').get(getSingleVenue).patch(updateSingleVenue).delete(deleteSingleVenue);

export default router;
