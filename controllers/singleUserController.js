import User from '../models/singleUserModel.js';

import { server200, server404, server500 } from '../methods/methods.js';

const getSingleUser = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await User.findOne({ _id: userId });
    user ? server200(res, user) : server404(res, userId);
  } catch (error) {
    server500(res, error);
  }
};

const addSingleUser = async (req, res) => {
  try {

    const userEmail = await User.distinct('email', { email: req.body.name });
    if (userEmail.length) {
      return res.status(400).json({
        status: 'fail',
        message: 'You are already registered',
      });
    }

    const newUser = await User.create(req.body);
    server200(res, newUser);
  } catch (error) {
    server500(res, error);
  }
};

const updateSingleUser = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
      runValidators: true,
    });
    user ? server200(res, user) : server404(res, userId);
  } catch (error) {
    server500(res, error);
  }
};

const deleteSingleUser = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const user = await User.findOneAndDelete({ _id: userId });
    user ? server200(res, user) : server404(res, userId);
  } catch (error) {
    server500(res, error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    server200(res, users);
  } catch (error) {
    server500(res, error);
  }
};

const addManyUsers = async (req, res) => {
  try {
    const users = await User.insertMany(req.body);
    server200(res, users);
  } catch (error) {
    server500(res, error);
  }
};

const updateManyUsers = async (req, res) => {
  try {
    const users = await User.updateMany(req.body.filter, req.body.update, {
      new: true,
      runValidators: true,
    });
    server200(res, users);
  } catch (error) {
    server500(res, error);
  }
};

const deleteManyUsers = async (req, res) => {
  try {
    const users = await User.deleteMany(req.body);
    server200(res, users);
  } catch (error) {
    server500(res, error);
  }
};

export {
  getSingleUser,
  addSingleUser,
  updateSingleUser,
  deleteSingleUser,
  getAllUsers,
  addManyUsers,
  updateManyUsers,
  deleteManyUsers,
};
