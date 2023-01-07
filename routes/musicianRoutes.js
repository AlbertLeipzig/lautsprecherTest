const express = require('express');
const router = express.Router();

const {
  getAllMusicians,
  getSingleMusician,
  addMusician,
  updateMusician,
  deleteMusician,
} = require('../controllers/musicianController.js');

router.route('/').get(getAllMusicians).post(addMusician);
router
  .route('/:id')
  .get(getSingleMusician)
  .patch(updateMusician)
  .delete(deleteMusician);

module.exports = router;
