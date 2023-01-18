import express from 'express';
const router = express.Router();
import {
  getSingleUser,
  addSingleUser,
  updateSingleUser,
  deleteSingleUser,
  getAllUsers,
  addManyUsers,
  updateManyUsers,
  deleteManyUsers,
} from '../controllers/singleUserController.js';

router.route('/').get(getAllUsers).post(addSingleUser);
router
  .route('/many')
  .post(addManyUsers)
  .patch(updateManyUsers)
  .delete(deleteManyUsers);
router
  .route('/:id')
  .get(getSingleUser)
  .patch(updateSingleUser)
  .delete(deleteSingleUser);

export default router;
