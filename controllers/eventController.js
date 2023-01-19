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
    /* const eventDate = await Event.distinct('date', { date: req.body.date });
    const eventVenue = await Event.distinct('venue', { venue: req.body.venue });
    const timeAndPlace = eventDate.length + eventVenue.length; */

    /* if (eventName.length || timeAndPlace.length < 2) { */

    // this is well intended, but the condition is kind of too restrictive. What happen if you have more than one let's say "jam session"? You can't add them because the condition will be true. You need to check if the event name and the date and the venue are the same. You can do that with the $and operator. You can also use the $or operator to check if the event name or the date or the venue are the same. You can also use the $nor operator to check if the event name and the date and the venue are not the same. You can also use the $not operator to check if the event name is not the same. You can also use the $where operator to check if the event name is the same. You can also use the $expr operator to check if the event name is the same. You can also use the $jsonSchema operator to check if the event name is the same. You can also use the $mod operator to check if the event name is the same. You can also use the $regex operator to check if the event name is the same. You can also use the $text operator to check if the event name is the same. You can also use the $where operator to check if the event name is the same. You can also use the $geoIntersects operator to check if the event name is the same. You can also use the $geoWithin operator to check if the event name is the same. You can also use the $near operator to check if the event name is the same. You can also use the $nearSphere operator to check if the event name is the same. You can also use the $all operator to check if the event name is the same. You can also use the $elemMatch operator to check if the event name is the same. You can also use the $size operator to check if the event name is the same. You can also use the $bitsAllClear operator to check if the event name is the same. You can also use the $bitsAllSet operator to check if the event name is the same. You can also use the $bitsAnyClear operator to check if the event name is the same. You can also use the $bitsAnySet operator to check if the event name is the same. You can also use the $comment operator to check if the event name is the same. You can also use the $explain operator to check if the event name is the same. You can also use the $hint operator to check if the event name is the same

    /* const eventName = await Event.distinct('name', { name: req.body.name });
    if (eventName.length) {
      return res.status(400).json({
        status: 'fail',
        message: 'Document already exists',
      });
    } */
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
