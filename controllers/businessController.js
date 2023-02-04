import Business from '../models/businessModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

const getSingleBusiness = async (req, res) => {
  try {
    const { id: businessId } = req.params;
    const business = await Business.findById({ _id: businessId });
    business ? server200(res, band) : server404(res, businessId);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addSingleBusiness = async (req, res) => {
  try {
    const { name, confirmationStatus } = req.body;
    const existingBusiness = await Business.find({ name: name });

    if (!existingBusiness) {
    const newBusiness = await Business.create(req.body);
    res.status(200).json({ newBusiness });
  } else if (existingBusiness && confirmationStatus === undefined) {
    res.status(200).json({
      message: 'You are trying to add a business that already exists.',
      payload: existingBusiness,
    });
  } else if (existingBusiness && confirmationStatus) {
    updateSingleBusiness(req, res);
  } else {
    res.status(400).json({
      status: 'fail',
      message: 'Business already exists',
    });
  }
  } catch (error) {
    server500(res, error);
  }
};

const updateSingleBusiness = async (req, res) => {
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

const deleteSingleBusiness = async (req, res) => {
  try {
    const { id: businessId } = req.params;
    const business = await Business.findByIdAndDelete(businessId);
    business ? server200(res, business) : server404(res, businessId);
  } catch (error) {
    server500(res, error);
  }
};

const getAllBusiness = async (req, res) => {
  try {
    const business = await Business.find({});
    business ? server200(res, business) : server404(res, 'placeholderId');
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

const updateManyBusiness = async (req, res) => {
  try {
    const business = await Business.update(req.body.filter, req.body.update, {
      new: true,
      runValidators: true,
    });
    server200(res, business);
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
  getSingleBusiness,
  addSingleBusiness,
  updateSingleBusiness,
  deleteSingleBusiness,
  getAllBusiness,
  addManyBusiness,
  updateManyBusiness,
  deleteManyBusiness,
};
