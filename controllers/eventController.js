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

const atLeastOne = (event) => {
  const { musicians, bands } = event;
  return musicians.length + bands.length > 0;
};

const addSingleEvent = async (req, res) => {
  try {
    const { name, confirmationStatus } = req.body;
    const existingEvent = await Event.find({ name: name });

    const newEvent = await Event.create(req.body);
    atLeastOne(newEvent)
      ? server200(res, newEvent)
      : res.status(400).json({
          status: 'fail',
          message: 'Event must have at least one musician or band',
        });
    /* if (!existingEvent) {
      const newEvent = await Event.create(req.body);
      atLeastOne(newEvent)
        ? server200(res, newEvent)
        : res.status(400).json({
            status: 'fail',
            message: 'Event must have at least one musician or band',
          });
    } else if (existingEvent && confirmationStatus === undefined) {
      res.status(200).json({
        message: 'You are trying to add an event that already exists.',
        payload: existingEvent,
      });
    } else if (existingEvent && confirmationStatus) {
      updateSingleEvent(req, res);
    } else {
      res.status(400).json({
        status: 'fail',
        message: 'Event already exists',
      });
    } */
  } catch (error) {
    server500(res, error);
  }
};

const updateSingleEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const eventName = req.params.name;
    const filter = eventId || eventName;
    const event = await Event.findOneAndUpdate(filter, req.body, {
      /* new: true, */
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
    // how do you check if any of the documents already exist?
    const newEvents = await Event.insertMany(req.body);
    server200(res, newEvents);
  } catch (error) {
    server500(res, error);
  }
};

const updateManyEvents = async (req, res) => {
  try {
    const events = await Event.updateMany(req.body.filter, req.body.update, {
      /* new: true, */
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
