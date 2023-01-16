const Business = require('../models/businessModel');

const { server200, server404, server500 } = require('../methods/methods');

const getAllBusiness = async (req, res) => {
  try {
    const business = await Business.find({});
    business ? server200(res, business) : server404(res, 'placeholderId');
  } catch (error) {
    server500(res, error);
  }
};

/* 

const getAllBusiness = async (req, res) => {
  const business = await Business.find({});
  if (business) {
    server200(res, business);
  } else if (!business) {
    server404(res, 'placeholderId');
  } else {
    server500(res, error);
  }
};

 */

const getSingleBusiness = async (req, res) => {
  try {
    const { id: businessId } = req.params;
    const business = await Business.findById(businessId);
    business ? server200(res, band) : server404(res, businessId);
  } catch (error) {
    server500(res, error);
  }
};

const addBusiness = async (req, res) => {
  try {
    
    const newBusiness = await Business.create(req.body);

    // look into db to see if business exists

    const businessName = req.body.name;
    const business = await Business.findOne({ name: businessName });

    


    /* business
      ? server500(res, `business can't be added, contact admin`)
      : server200(res, newBusiness); */
  } catch (error) {
    server500(res, error);
  }
};

const updateBusiness = async (req, res) => {
  try {
    const { id: businessId } = req.params;
    const business = await Business.findOneAndUpdate(
      { _id: businessId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    business ? server200(res, business) : server404(res, businessId);
  } catch (error) {
    server500(res, error);
  }
};

const deleteBusiness = async (req, res) => {
  try {
    const { id: businessId } = req.params;
    const business = await Business.findByIdAndDelete(businessId);
    business ? server200(res, business) : server404(res, businessId);
  } catch (error) {
    server500(res, error);
  }
};

module.exports = {
  getAllBusiness,
  getSingleBusiness,
  addBusiness,
  updateBusiness,
  deleteBusiness,
};
