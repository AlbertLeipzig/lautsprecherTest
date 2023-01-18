import express from 'express';
const router = express.Router();

import {
  getSingleEvent,
  addSingleEvent,
  updateSingleEvent,
  deleteSingleEvent,
  getAllEvents,
  addManyEvents,
  updateManyEvents,
  deleteManyEvents,
} from '../controllers/EventController.js';

router.route('/').get(getAllEvents).post(addSingleEvent);
router.route("/many").post(addManyEvents).patch(updateManyEvents).delete(deleteManyEvents)
router.route('/:id').get(getSingleEvent).patch(updateSingleEvent).delete(deleteSingleEvent);

export default router;
