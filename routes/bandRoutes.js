const express = require('express');
const router = express.Router();

const {
  getAllBands,
  getSingleBand,
  addBand,
  updateBand,
  deleteBand,
  getTest,
} = require('../controllers/BandController.js');

router.route('/').get(getAllBands).post(addBand);
router.route('/:id').get(getTest).patch(updateBand).delete(deleteBand);

module.exports = router;
