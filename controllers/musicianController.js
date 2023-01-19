import Musician from '../models/musicianModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

const getSingleMusician = async (req, res) => {
  try {
    const { id: musicianId } = req.params;
    const musician = await Musician.findById(musicianId);
    musician ? server200(res, musician) : server404(res, musicianId);
  } catch (error) {
    server500(res, error);
  }
};

const addSingleMusician = async (req, res) => {
  try {
    const musicianEmail = await Musician.distinct('email', { email: req.body.name });
    if (musicianEmail.length) {
      return res.status(400).json({
        status: 'fail',
        message: 'You are already registered',
      });
    }

    const newMusician = await Musician.create(req.body);
    res.status(200).json(newMusician);
  } catch (error) {
    server500(res, error);
  }
};

const updateSingleMusician = async (req, res) => {
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

const deleteSingleMusician = async (req, res) => {
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

const getAllMusicians = async (req, res) => {
  try {
    const musicians = await Musician.find({});
    server200(res, musicians);
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

const updateManyMusicians = async (req, res) => {
  try {
    const musicians = await Musician.updateMany(
      req.body.filter,
      req.body.update,
      { new: true, runValidators: true }
    );
    server200(res, musicians);
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
  getSingleMusician,
  addSingleMusician,
  updateSingleMusician,
  deleteSingleMusician,
  getAllMusicians,
  addManyMusicians,
  updateManyMusicians,
  deleteManyMusicians,
};
