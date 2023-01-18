import Band from '../models/bandModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

const getSingleBand = async (req, res) => {
  try {
    const { id: bandId } = req.params;
    const band = await Band.findById(bandId);
    band ? server200(res, band) : server404(res, bandId);
  } catch (error) {
    server500(res, error);
  }
};

const addSingleBand = async (req, res) => {
  try {
    const newBand = await Band.create(req.body);

    // look into db to see if band exists

    server200(res, newBand);
  } catch (error) {
    server500(res, error);
  }
};

const updateSingleBand = async (req, res) => {
  try {
    const { id: bandId } = req.params;
    const band = await Band.findOneAndUpdate({ _id: bandId }, req.body, {
      new: true,
      runValidators: true,
    });
    band ? server200(res, band) : server404(res, bandId);
  } catch (error) {
    server500(res, error);
  }
};

const deleteSingleBand = async (req, res) => {
  try {
    const { id: bandId } = req.params;
    const band = await Band.findByIdAndDelete(bandId);
    band ? server200(res, band) : server404(res, bandId);
  } catch (error) {
    server500(res, error);
  }
};

const getAllBands = async (req, res) => {
  try {
    const bands = await Band.find();

    bands ? server200(res, bands) : server404(res, 'placeholderId');
  } catch (error) {
    server500(res, error);
  }
};

const addManyBands = async (req, res) => {
  try {
    const bands = await Band.insertMany(req.body);
    server200(res, bands);
  } catch (error) {
    server500(res, error);
  }
};

const updateManyBands = async (req, res) => {
  try {
    const bands = await Band.updateMany(req.body.filter, req.body.update, {
      new: true,
      runValidators: true,
    });
    server200(res, bands);
  } catch (error) {
    server500(res, error);
  }
};

const deleteManyBands = async (req, res) => {
  try {
    const bands = await Band.deleteMany(req.body);
    server200(res, bands);
  } catch (error) {
    server500(res, error);
  }
};

export {
  getSingleBand,
  addSingleBand,
  updateSingleBand,
  deleteSingleBand,
  getAllBands,
  addManyBands,
  updateManyBands,
  deleteManyBands,
};
