const express = require('express');
const router = express.Router();

const getAllBands = require('../controllers/bandController');
const getSingleBand = require('../controllers/bandController');
const addBand = require('../controllers/bandController');
const updateBand = require('../controllers/bandController');
const deleteBand = require('../controllers/bandController');

/* const {
  getAllBands,
  getSingleBand,
  addBand,
  updateBand,
  deleteBand,
} = require('../controllers/BandController.js'); */

router.route('/').get(getAllBands).post(addBand);
router.route('/:id').get(getSingleBand).patch(updateBand).delete(deleteBand);

module.exports = router;
