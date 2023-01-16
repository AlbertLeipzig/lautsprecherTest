import express from 'express';
const router = express.Router();

import {
  getAllEvents,
  getSingleEvent,
  addEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/EventController.js';

router.route('/').get(getAllEvents).post(addEvent);
router.route('/:id').get(getSingleEvent).patch(updateEvent).delete(deleteEvent);

export default router;
