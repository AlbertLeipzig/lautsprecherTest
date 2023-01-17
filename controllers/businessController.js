import Business from '../models/businessModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

const getAllBusiness = async (req, res) => {
  try {
    const business = await Business.find({});
    business ? server200(res, business) : server404(res, 'placeholderId');
  } catch (error) {
    server500(res, error);
  }
};

const getSingleBusiness = async (req, res) => {
  try {
    const { id: businessId } = req.params;
    const business = await Business.findById({ _id: businessId });
    business ? server200(res, band) : server404(res, businessId);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addBusiness = async (req, res) => {
  try {
    const newBusiness = await Business.create(req.body);

    res.status(200).json({ newBusiness });
    // look into db to see if business exists

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

const addManyBusiness = async (req, res) => {
  try {
    const newBusiness = await Business.insertMany(req.body);
    res.status(200).json({ newBusiness });
  } catch (error) {
    server500(res, error);
  }
};

const deleteManyBusiness = async (req, res) => {
  try {
    const business = await Business.deleteMany({});
    server200(res, business);
  } catch (error) {
    server500(res, error);
  }
};

export {
  getAllBusiness,
  getSingleBusiness,
  addBusiness,
  updateBusiness,
  deleteBusiness,
  addManyBusiness,
  deleteManyBusiness,
};
