const Band = require('../models/bandModel');

const { server200, server404, server500 } = require('../methods/methods');

const getAllBands = async (req, res) => {
  try {
    const bands = await Band.find();

    bands ? server200(res, bands) : server404(res, 'placeholderId');
  } catch (error) {
    server500(res, error);
  }
};

const getSingleBand = async (req, res) => {
  try {
    const { id: bandId } = req.params;
    const band = await Band.findById(bandId);
    band ? server200(res, band) : server404(res, bandId);
  } catch (error) {
    server500(res, error);
  }
};
/* 
implement controllers to get [X] by
    id (default)
    firstName
    lastName
    date
    (email ?)
    tag
    price
 */

const getTest = async (req, res) => {
  try {
    let parameters = {};
    const { id: bandId } = req.params;
    const band = await Band.findById(bandId);
    console.log(band);
    res.status(200).json({ name: band.bandName });
  } catch (error) {
    server500(res, error);
  }

  /* 
  try {
    const { id: bandId } = req.params;
    const band = await Band.findById(bandId);
    band ? server200(res, band) : server404(res, bandId);
  } catch (error) {
    server500(res, error);
  } */
};

const addBand = async (req, res) => {
  try {
    const newBand = await Band.create(req.body);

    // look into db to see if band exists

    server200(res, newBand);
  } catch (error) {
    server500(res, error);
  }
};

const updateBand = async (req, res) => {
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

const deleteBand = async (req, res) => {
  try {
    const { id: bandId } = req.params;
    const band = await Band.findByIdAndDelete(bandId);
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
  getTest,
};
