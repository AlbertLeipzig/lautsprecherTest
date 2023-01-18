import express from 'express';
const router = express.Router();

import {
  getSingleMusician,
  addSingleMusician,
  updateSingleMusician,
  deleteSingleMusician,
  getAllMusicians,
  addManyMusicians,
  updateManyMusicians,
  deleteManyMusicians,
} from '../controllers/musicianController.js';

router.route('/').get(getAllMusicians).post(addSingleMusician);
router.route("/many").post(addManyMusicians).patch(updateManyMusicians).delete(deleteManyMusicians)
router
  .route('/:id')
  .get(getSingleMusician)
  .patch(updateSingleMusician)
  .delete(deleteSingleMusician);

export default router;
