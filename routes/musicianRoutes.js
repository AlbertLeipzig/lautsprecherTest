import express from 'express';
const router = express.Router();

import {
  getAllMusicians,
  getSingleMusician,
  addMusician,
  updateMusician,
  deleteMusician,
} from '../controllers/musicianController.js';

router.route('/').get(getAllMusicians).post(addMusician);
router
  .route('/:id')
  .get(getSingleMusician)
  .patch(updateMusician)
  .delete(deleteMusician);

export default router;
