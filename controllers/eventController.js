import Event from '../models/eventModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

const getSingleEvent = async (req, res) => {
  try {
    const { id: eventId } = req.params;
    const event = await Event.findById(eventId);
    event ? server200(res, event) : server404(res, eventId);
  } catch (error) {
    server500(res, error);
  }
};

const addSingleEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    server200(res, newEvent);
  } catch (error) {
    server500(res, error);
  }
};

const updateSingleEvent = async (req, res) => {
  try {
    const { id: eventId } = req.params;
    const event = await Event.findOneAndUpdate({ _id: eventId }, req.body, {
      new: true,
      runValidators: true,
    });
    event ? server200(res, event) : server404(res, eventId);
  } catch (error) {
    server500(res, error);
  }
};

const deleteSingleEvent = async (req, res) => {
  try {
    const { id: eventId } = req.params;
    const event = await Event.findByIdAndDelete(eventId);
    event ? server200(res, event) : server404(res, eventId);
  } catch (error) {
    server500(res, error);
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    events ? server200(res, events) : server404(res, 'placeholderId');
  } catch (error) {
    server500(res, error);
  }
};

const addManyEvents = async (req, res) => {
  try {
    const newEvents = await Event.insertMany(req.body);
    server200(res, newEvents);
  } catch (error) {
    server500(res, error);
  }
};

const updateManyEvents = async (req, res) => {
  try {
    const events = await Event.updateMany(req.body.filter, req.body.update, {
      new: true,
      runValidators: true,
    });
    server200(res, events);
  } catch (error) {
    server500(res, error);
  }
};

const deleteManyEvents = async (req, res) => {
  try {
    const events = await Event.deleteMany({});
    server200(res, events);
  } catch (error) {
    server500(res, error);
  }
};

export {
  getSingleEvent,
  addSingleEvent,
  updateSingleEvent,
  deleteSingleEvent,
  getAllEvents,
  addManyEvents,
  updateManyEvents,
  deleteManyEvents,
};
