const express = require('express');
const router = express.Router();

const {
  getAllVenues,
  getSingleVenue,
  addVenue,
  updateVenue,
  deleteVenue,
} = require('../controllers/VenueController');

router.route('/').get(getAllVenues).post(addVenue);
router
  .route('/:id')
  .get(getSingleVenue)
  .patch(updateVenue)
  .delete(deleteVenue);

module.exports = router;
