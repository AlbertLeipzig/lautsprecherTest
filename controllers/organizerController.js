const Organizer = require('../models/organizerModel');

const { server200, server404, server500 } = require('../methods/methods');

const getAllOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.find({});
    server200(organizers);
  } catch (error) {
    server500(res, error);
  }
};

const getSingleOrganizer = async (req, res) => {
  try {
    const { id: organizerId } = req.params;
    const organizer = await Organizer.findOne({ _id: organizerId });
    organizer ? server200(res, organizer) : server404(res, organizerId);
  } catch (error) {
    server500(res, error);
  }
};

const addOrganizer = async (req, res) => {
  try {
    const newOrganizer = await Organizer.create(req.body);
    server200(res, newOrganizer);
  } catch (error) {
    server500(res, error);
  }
};

const updateOrganizer = async (req, res) => {
  try {
    const { id: organizerId } = req.params;
    const organizer = await organizer.findOneAndUpdate(
      { _id: organizerId },
      req.params,
      {
        new: true,
        runValidators: true,
      }
    );
    organizer ? server200(res, organizer) : server404(res, organizerId);
  } catch (error) {
    server500(res, error);
  }
};

const deleteOrganizer = async (req, res) => {
  try {
    const { id: organizerId } = req.params;
    const organizer = await organizer.findOneAndRemove({ _id: organizerId });
    organizer ? server200(res, organizer) : server404(res, organizerId);
  } catch (error) {
    server500(res, error);
  }
};

module.exports = {
  getAllOrganizers,
  getSingleOrganizer,
  addOrganizer,
  updateOrganizer,
  deleteOrganizer,
};
