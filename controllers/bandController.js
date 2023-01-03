const Band = require('../models/bandModel');

const { server200, server404, server500 } = require('../methods/methods');

const getAllBands = async (req, res) => {
  try {
    const bands = await Band.find({});
    server200(bands);
  } catch (error) {
    server500(res, error);
  }
};

const getSingleBand = async (req, res) => {
  try {
    const { id: bandId } = req.params;
    const band = await Band.findOne({ _id: bandId });
    band ? server200(res, band) : server404(res, bandId);
  } catch (error) {
    server500(res, error);
  }
};

const addBand = async (req, res) => {
  try {
    const newBand = await Band.create(req.body);
    server200(res, newBand);
  } catch (error) {
    server500(res, error);
  }
};

const updateBand = async (req, res) => {
  try {
    const { id: bandId } = req.params;
    const band = await Band.findOneAndUpdate({ _id: bandId }, req.params, {
      new: true,
      runValidators: true,
    });
    band ? server200(res, band) : server404(res, bandId);
  } catch (error) {
    server500(res, error);
  }
};

const deleteBand = async (req, res) => {
  try {
    const { id: bandId } = req.params;
    const band = await Band.findOneAndRemove({ _id: bandId });
    band ? server200(res, band) : server404(res, bandId);
  } catch (error) {
    server500(res, error);
  }
};


module.exports = {
  getAllBands,
  getSingleBand,
  addBand,
  updateBand,
  deleteBand,
};
