import Message from '../models/messageModel.js';

import { server200, server500 } from '../methods/methods.js';

const postMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    server200(res, message);
  } catch (error) {
    server500(res, error);
  }
};

export { postMessage };
