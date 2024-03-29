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
    const { name, confirmationStatus } = req.body;
    const existingBand = await Band.find({ name: name });

    if (!existingBand) {
      const newBand = await Band.create(req.body);
      server200(res, newBand);
    } else if (existingBand && confirmationStatus === undefined) {
      res.status(200).json({
        message: 'You are trying to add a band that already exists.',
        payload: existingBand,
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
    const bands = await Band.find();
    const rawBands = req.body;
    const bandsToBeAdded = rawBands.filter((band) => {
      const existingBand = bands.find((b) => b.name === band.name);
      return !existingBand;
    });
    const newBands = await Band.insertMany(bandsToBeAdded);
    server200(res, newBands);
  } catch (error) {
    server500(res, error);
  }
};

const updateManyBands = async (req, res) => {
  try {
    const bands = await Band.find();

    const rawBands = req.body;
    const bandsToBeUpdated = rawBands.filter((band) => {
      const existingBand = bands.find((b) => b.name === band.name);
      return existingBand;
    });

    const updatedBands = bandsToBeUpdated.map(async (band) => {
      const updatedBand = await Band.findOneAndUpdate(
        { name: band.name },
        band,
        {
          new: true,
          runValidators: true,
        }
      );
      return updatedBand;
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
