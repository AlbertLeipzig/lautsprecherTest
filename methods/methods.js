const server200 = (res, data) => {
  return res.status(200).json({ data });
};

const server404 = (res, id) => {
  return res.status(404).json({ msg: `No document with id ${id} found` });
};

const server500 = (res, error) => {
  return res.status(500).json({ error });
};

module.exports = { server200, server404, server500 };
