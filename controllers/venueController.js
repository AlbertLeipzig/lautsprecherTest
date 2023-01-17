import Venue from '../models/VenueModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

const getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.find({});
    venues ? server200(res, venues) : server404(res, 'placeholderId');
  } catch (error) {
    server500(res, error);
  }
};

const getSingleVenue = async (req, res) => {
  try {
    const { id: venueId } = req.params;
    const venue = await Venue.findById(venueId);
    venue ? server200(res, venue) : server404(res, venueId);
  } catch (error) {
    server500(res, error);
  }
};

const addVenue = async (req, res) => {
  try {
    const newVenue = await Venue.create(req.body);
    server200(res, newVenue);
    // look into db to see if venue exists

    /* const venueName = req.body.name;
    const venue = await Venue.findOne({ name: venueName });

    venue
      ? server500(res, `venue can't be added, contact admin`)
      : server200(res, newVenue); */
  } catch (error) {
    server500(res, error);
  }
};

const updateVenue = async (req, res) => {
  try {
    const { id: venueId } = req.params;
    const venue = await Venue.findOneAndUpdate({ _id: venueId }, req.body, {
      new: true,
      runValidators: true,
    });
    venue ? server200(res, venue) : server404(res, venueId);
  } catch (error) {
    server500(res, error);
  }
};

const deleteVenue = async (req, res) => {
  try {
    const { id: venueId } = req.params;
    const venue = await Venue.findByIdAndDelete(venueId);
    venue ? server200(res, venue) : server404(res, venueId);
  } catch (error) {
    server500(res, error);
  }
};

const addManyVenues = async (req, res) => {
  try {
    const newVenues = await Venue.insertMany(req.body);
    server200(res, newVenues);
  } catch (error) {
    server500(res, error);
  }
};

const deleteManyVenues = async (req, res) => {
  try {
    const venues = await Venue.deleteMany();
    server200(res, venues);
  } catch (error) {
    server500(res, error);
  }
};

export {
  getAllVenues,
  getSingleVenue,
  addVenue,
  updateVenue,
  deleteVenue,
  addManyVenues,
  deleteManyVenues,
};
