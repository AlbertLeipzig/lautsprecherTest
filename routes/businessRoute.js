const express = require('express');
const router = express.Router();

const {
  getAllBusiness,
  getSingleBusiness,
  addBusiness,
  updateBusiness,
  deleteBusiness,
} = require('../controllers/BusinessController');

router.route('/').get(getAllBusiness).post(addBusiness);
router
  .route('/:id')
  .get(getSingleBusiness)
  .patch(updateBusiness)
  .delete(deleteBusiness);

module.exports = router;