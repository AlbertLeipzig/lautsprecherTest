const Musician = require('../models/musicianModel');
/* const { server200, server404, server500 } = require('../methods/methods'); */

// methods

const server200 = (res, data) => {
  return res.status(200).json({ data });
};

const server404 = (res, id) => {
  return res.status(404).json({ msg: `No document with id ${id} found` });
};

const server500 = (res, error) => {
  return res.status(500).json({ error });
};

// routes

const getAllMusicians = async (req, res) => {
  try {
    const musicians = await Musician.find({});
    server200(res, musicians);
  } catch (error) {
    server500(res, error);
  }
};

const getSingleMusician = async (req, res) => {
  try {
    const { id: musicianId } = req.params;
    const musician = await Musician.findOne({ _id: musicianId });
    musician ? server200(res, musician) : server404(res, musicianId);
  } catch (error) {
    server500(res, error);
  }
};

const addMusician = async (req, res) => {
  try {
    const newMusician = await Musician.create(req.body);
    server200(res, newMusician);
  } catch (error) {
    server500(res, error);
  }
};

const updateMusician = async (req, res) => {
  try {
    const { id: musicianId } = req.params;
    const musician = await Musician.findOneAndUpdate(
      { _id: musicianId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    musician ? server200(res, musician) : server404(res, musicianId);
  } catch (error) {
    server500(res, error);
  }
};

const deleteMusician = async (req, res) => {
  try {
    const { id: musicianId } = req.params;
    const musician = await Musician.findOneAndDelete({ _id: musicianId });
    musician ? server200(res, musician) : server404(res, musicianId);
  } catch (error) {
    server500(res, error);
  }
};

module.exports = {
  getAllMusicians,
  getSingleMusician,
  addMusician,
  updateMusician,
  deleteMusician,
};
