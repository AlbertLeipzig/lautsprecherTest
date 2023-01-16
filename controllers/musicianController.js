const Musician = require('../models/musicianModel');
const { server200, server404, server500 } = require('../methods/methods');

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
    const musician = await Musician.findById(musicianId);
    musician ? server200(res, musician) : server404(res, musicianId);
  } catch (error) {
    server500(res, error);
  }
};

const addMusician = async (req, res) => {
  try {
    const newMusician = await Musician.create(req.body);

    // look into db to see if musician exists

    const musicianName = req.body.name;
    const musician = await Musician.findOne({ name: musicianName });

    musician
      ? server500(res, `musician can't be added, contact admin`)
      : server200(res, newMusician);
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
    const musician = await Musician.findById(musicianId);
    musician ? await Musician.deleteOne(musician) : server404(res, musicianId);
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
