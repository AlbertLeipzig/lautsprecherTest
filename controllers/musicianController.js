import Musician from '../models/musicianModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

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
    res.status(200).json(newMusician);
    // look into db to see if musician exists

    /*     const musicianName = req.body.name;
    const musician = await Musician.findOne({ name: musicianName });

    musician
      ? server500(res, `musician can't be added, contact admin`)
      : server200(res, newMusician); */
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
    const musician = await Musician.findByIdAndDelete(musicianId);
    musician ? server200(res, musician) : server404(res, musicianId);
    /* server200(res, musician) */
    /* musician ? await Musician.deleteOne(musician) : server404(res, musicianId); */
  } catch (error) {
    server500(res, error);
  }
};

const addManyMusicians = async (req, res) => {
  try {
    const newMusicians = await Musician.insertMany(req.body);
    server200(res, newMusicians);
  } catch (error) {
    server500(res, error);
  }
};

const deleteManyMusicians = async (req, res) => {
  try {
    const musicians = await Musician.deleteMany();
    server200(res, musicians);
  } catch (error) {
    server500(res, error);
  }
};

export {
  getAllMusicians,
  getSingleMusician,
  addMusician,
  updateMusician,
  deleteMusician,
  addManyMusicians,
  deleteManyMusicians,
};
