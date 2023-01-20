import Organizer from '../models/organizerModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

const getSingleOrganizer = async (req, res) => {
  try {
    const { id: organizerId } = req.params;
    const organizer = await Organizer.findById(organizerId);
    organizer ? server200(res, organizer) : server404(res, organizerId);
  } catch (error) {
    server500(res, error);
  }
};

const addSingleOrganizer = async (req, res) => {
  try {
    const organizerEmail = await Organizer.distinct('email', {
      email: req.body.name,
    });
    if (organizerEmail.length) {
      return res.status(400).json({
        status: 'fail',
        message: 'You are already registered',
      });
    }

    const { firstName, lastName, confirmationStatus } = req.body;

    const existingOrganizer = await Organizer.find({
      firstName: firstName,
      lastName: lastName,
    });

    if (!existingOrganizer) {
      const newOrganizer = await Organizer.create(req.body);
      server200(res, newOrganizer);
    } else if (existingOrganizer && confirmationStatus === undefined) {
      res.status(200).json({
        message: 'You are trying to add a organizer that already exists.',
        payload : existingOrganizer
      });
    } else if (existingOrganizer && confirmationStatus) {
      updateSingleOrganizer(req, res);
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'Organizer already exists',
      });
    }
  } catch (error) {
    server500(res, error);
  }
};

const updateSingleOrganizer = async (req, res) => {
  try {
    const { id: organizerId } = req.params;
    const { firstName, lastName } = req.body;
    const filter = organizerId || firstName || lastName;
    const organizer = await Organizer.findOneAndUpdate(filter, req.body, {
      new: true,
      runValidators: true,
    });
    organizer ? server200(res, organizer) : server404(res, organizerId);
  } catch (error) {
    server500(res, error);
  }
};

const deleteSingleOrganizer = async (req, res) => {
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

const getAllOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.find({});
    organizers ? server200(res, organizers) : server404(res, 'placeholderId');
  } catch (error) {
    server500(res, error);
  }
};

const addManyOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.insertMany(req.body);
    server200(res, organizers);
  } catch (error) {
    server500(res, error);
  }
};

const updateManyOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.updateMany(
      req.body.filter,
      req.body.update,
      { new: true, runValidators: true }
    );
    server200(res, organizers);
  } catch (error) {
    server500(res, error);
  }
};

const deleteManyOrganizers = async (req, res) => {
  try {
    const organizers = await Organizer.deleteMany({});
    server200(res, organizers);
  } catch (error) {
    server500(res, error);
  }
};

export {
  getSingleOrganizer,
  addSingleOrganizer,
  updateSingleOrganizer,
  deleteSingleOrganizer,
  getAllOrganizers,
  addManyOrganizers,
  updateManyOrganizers,
  deleteManyOrganizers,
};
