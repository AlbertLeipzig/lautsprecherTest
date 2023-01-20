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
    const { name } = req.body;
    const { confirmationStatus } = req.body;
    const existingBand = await Band.findOne({ name: name });

    if (!existingBand) {
      const newBand = await Band.create(req.body);
      server200(res, newBand);
    } else if (existingBand && confirmationStatus === undefined) {
      res.status(200).json({
        message: 'You are trying to add a band that already exists.',
      });
    } else if (existingBand && confirmationStatus) {
      updateSingleBand(req, res);
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'Band already exists',
      });
    }
  } catch (error) {
    server500(res, error);
  }
};

const updateSingleBand = async (req, res) => {
  try {
    const bandId = req.params.id;
    const name = req.body.name;
    const filter = bandId || name;
    const band = await Band.findOneAndUpdate(filter, req.body, {
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
