const express = require('express');
const router = express.Router();

const {
  getAllOrganizers,
  getSingleOrganizer,
  addOrganizer,
  updateOrganizer,
  deleteOrganizer,
} = require('../controllers/organizerController.js');

router.route('/').get(getAllOrganizers).post(addOrganizer);
router
  .route('/:id')
  .get(getSingleOrganizer)
  .patch(updateOrganizer)
  .delete(deleteOrganizer);

module.exports = router;
