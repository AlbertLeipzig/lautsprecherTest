const Organizer = require('../models/organizerModel');

const { server200, server404, server500 } = require('../methods/methods');

const getAllOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.find({});

    organizers ? server200(res, organizers) : server404(res, 'placeholderId');
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

    // look into db to see if organizer exists

    const organizerName = req.body.name;
    const organizer = await Organizer.findOne({ name: organizerName });

    organizer
      ? server500(res, `organizer can't be added, contact admin`)
      : server200(res, newOrganizer);
  } catch (error) {
    server500(res, error);
  }
};

const updateOrganizer = async (req, res) => {
  try {
    const { id: organizerId } = req.params;
    const organizer = await Organizer.findOneAndUpdate(
      { _id: organizerId },
      req.body,
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
