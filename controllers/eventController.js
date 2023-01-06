const Event = require('../models/eventModel');

const { server200, server404, server500 } = require('../methods/methods');

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    events ? server200(res, events) : server404(res, 'placeholderId');
  } catch (error) {
    server500(res, error);
  }
};

const getSingleEvent = async (req, res) => {
  try {
    const { id: eventId } = req.params;
    const event = await Event.findById(eventId);
    event ? server200(res, event) : server404(res, eventId);
  } catch (error) {
    server500(res, error);
  }
};

const addEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);

    // look into db to see if event exists

    const eventName = req.body.name;
    const event = await Event.findOne({ name: eventName });

    event
      ? server500(res, `event can't be added, contact admin`)
      : server200(res, newEvent);
  } catch (error) {
    server500(res, error);
  }
};

const updateEvent = async (req, res) => {
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

const deleteEvent = async (req, res) => {
  try {
    const { id: eventId } = req.params;
    const event = await Event.findByIdAndDelete(eventId);
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
