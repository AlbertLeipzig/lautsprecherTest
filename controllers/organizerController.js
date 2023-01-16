import Organizer from '../models/organizerModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

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
    const organizer = await Organizer.findById(organizerId);
    organizer ? server200(res, organizer) : server404(res, organizerId);
  } catch (error) {
    server500(res, error);
  }
};

const addOrganizer = async (req, res) => {
  try {
    const newOrganizer = await Organizer.create(req.body);
    server200(res, newOrganizer);
    // look into db to see if organizer exists

    /*   const organizerName = req.body.name;
    const organizer = await Organizer.findOne({ name: organizerName });

    organizer
      ? server500(res, `organizer can't be added, contact admin`)
      : server200(res, newOrganizer); */
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
    const organizer = await Organizer.findByIdAndDelete(organizerId);
    organizer ? server200(res, organizer) : server404(res, organizerId);
    /* server200(res, organizer); */
    /* organizer ? server200(res, organizer) : server404(res, organizerId); */
  } catch (error) {
    server500(res, error);
  }
};

export {
  getAllOrganizers,
  getSingleOrganizer,
  addOrganizer,
  updateOrganizer,
  deleteOrganizer,
};
