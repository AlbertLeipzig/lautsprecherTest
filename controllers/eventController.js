const Event = require('../models/eventModel');

const { server200, server404, server500 } = require('../methods/methods');

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    server200(events);
  } catch (error) {
    server500(res, error);
  }
};

const getSingleEvent = async (req, res) => {
  try {
    const { id: eventId } = req.params;
    const event = await Event.findOne({ _id: eventId });
    event ? server200(res, event) : server404(res, eventId);
  } catch (error) {
    server500(res, error);
  }
};

const addEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    server200(res, newEvent);
  } catch (error) {
    server500(res, error);
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id: eventId } = req.params;
    const event = await Event.findOneAndUpdate({ _id: eventId }, req.params, {
      new: true,
      runValidators: true,
    });
    event ? server200(res, event) : server404(res, eventId);
  } catch (error) {
    server500(res, error);
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id: eventId } = req.params;
    const event = await Event.findOneAndRemove({ _id: eventId });
    event ? server200(res, event) : server404(res, eventId);
  } catch (error) {
    server500(res, error);
  }
};

module.exports = {
  getAllEvents,
  getSingleEvent,
  addEvent,
  updateEvent,
  deleteEvent,
};
