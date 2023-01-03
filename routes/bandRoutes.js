const express = require('express');
const router = express.Router();

const {
  getAllBands,
  getSingleBand,
  addBand,
  updateBand,
  deleteBand,
} = require('../controllers/BandController');

router.route('/').get(getAllBands).post(addBand);
router
  .route('/:id')
  .get(getSingleBand)
  .patch(updateBand)
  .delete(deleteBand);

module.exports = router;

