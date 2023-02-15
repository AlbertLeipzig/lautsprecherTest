import Venue from '../models/venueModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

const getSingleVenue = async (req, res) => {
  try {
    const venueAddress = await Venue.distinct('address', {
      address: req.body.name,
    });
    if (venueAddress.length) {
      return res.status(400).json({
        status: 'fail',
        message: 'You are already registered',
      });
    }
    const { id: venueId } = req.params;
    const venue = await Venue.findById(venueId);
    venue ? server200(res, venue) : server404(res, venueId);
  } catch (error) {
    server500(res, error);
  }
};

const addSingleVenue = async (req, res) => {
  try {
    const { name, confirmationStatus } = req.body;
    const existingVenue = await Venue.find({ name: name });

    if (!existingVenue) {
      const newVenue = await Venue.create(req.body);
      server200(res, newVenue);
    } else if (existingVenue && confirmationStatus === undefined) {
      res.status(200).json({
        message: 'You are trying to add a venue that already exists.',
        payload: existingVenue,
      });
    } else if (existingVenue && confirmationStatus) {
      updateSingleVenue(req, res);
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'Venue already exists',
      });
    }
  } catch (error) {
    server500(res, error);
  }
};

const updateSingleVenue = async (req, res) => {
  try {
    const venueId = req.params.id;
    const name = req.body.name;
    const filter = venueId || name;
    const venue = await Venue.findOneAndUpdate(filter, req.body, {
      new: true,
      runValidators: true,
    });
    venue ? server200(res, venue) : server404(res, venueId);
  } catch (error) {
    server500(res, error);
  }
};

const deleteSingleVenue = async (req, res) => {
  try {
    const { id: venueId } = req.params;
    const venue = await Venue.findByIdAndDelete(venueId);
    venue ? server200(res, venue) : server404(res, venueId);
  } catch (error) {
    server500(res, error);
  }
};

const getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.find({});
    venues ? server200(res, venues) : server404(res, 'placeholderId');
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

const updateManyVenues = async (req, res) => {
  try {
    const venues = await Venue.updateMany(req.body.filter, req.body.update, {
      new: true,
      runValidators: true,
    });
    server200(res, venues);
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
  getSingleVenue,
  addSingleVenue,
  updateSingleVenue,
  deleteSingleVenue,
  getAllVenues,
  addManyVenues,
  updateManyVenues,
  deleteManyVenues,
};
