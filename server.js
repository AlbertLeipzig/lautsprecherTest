const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const connectDb = require('./db/dbConnection');
const baseApi = '/api/v1';
const musicianRoutes = require('./routes/musicianRoutes');
const bandRoutes = require('./routes/bandRoutes');
const eventRoutes = require('./routes/eventRoutes');
const venueRoutes = require('./routes/venueRoutes');
const organizerRoutes = require('./routes/organizerRoutes');
const businessRoutes = require('./routes/businessRoute');

// connectDB

const mongoUri = process.env.MONGOURI;

// middleware

app.use(express.json());

//routes

app.use(`${baseApi}/bands`, bandRoutes);
app.use(`${baseApi}/business`, businessRoutes);
app.use(`${baseApi}/events`, eventRoutes);
app.use(`${baseApi}/musicians`, musicianRoutes);
app.use(`${baseApi}/organizers`, organizerRoutes);
app.use(`${baseApi}/venues`, venueRoutes);

// start server

const startServer = async () => {
  try {
    await connectDb(mongoUri);
    app.listen(PORT, console.log(`server running on port ${PORT}`));
  } catch (error) {
    console.error({ error });
  }
};

startServer();
