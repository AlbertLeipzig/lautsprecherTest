const express = require('express');
const router = express.Router();

const {
  getAllEvents,
  getSingleEvent,
  addEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/EventController.js');

router.route('/').get(getAllEvents).post(addEvent);
router
  .route('/:id')
  .get(getSingleEvent)
  .patch(updateEvent)
  .delete(deleteEvent);

module.exports = router;
