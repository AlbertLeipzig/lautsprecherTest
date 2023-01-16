import Band from '../models/bandModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

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

/* 
  try {
    const { id: bandId } = req.params;
    const band = await Band.findById(bandId);
    band ? server200(res, band) : server404(res, bandId);
  } catch (error) {
    server500(res, error);
  } */

  
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

export { getAllBands, getSingleBand, addBand, updateBand, deleteBand };
