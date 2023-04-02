import express from 'express';

const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();

const PORT = process.env.PORT || 5000;
import dbConnection from './db/dbConnection.js';
import bandRoutes from './routes/bandRoutes.js';
import musicianRoutes from './routes/musicianRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import venueRoutes from './routes/venueRoutes.js';
import organizerRoutes from './routes/organizerRoutes.js';
import businessRoutes from './routes/businessRoute.js';
import singleUserRoutes from './routes/singleUserRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

// connectDB

const mongoUri = process.env.MONGOURI;

// middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: 'https://melodic-kulfi-fc3b2f.netlify.app/events',
  })
);

//routes

const baseApi = '/api/v1';
app.use(`${baseApi}/bands`, bandRoutes);
app.use(`${baseApi}/business`, businessRoutes);
app.use(`${baseApi}/events`, eventRoutes);
app.use(`${baseApi}/musicians`, musicianRoutes);
app.use(`${baseApi}/organ izers`, organizerRoutes);
app.use(`${baseApi}/venues`, venueRoutes);
app.use(`${baseApi}/user`, singleUserRoutes);
app.use(`${baseApi}/message`, messageRoutes);

// start server

const startServer = async () => {
  try {
    await dbConnection(mongoUri);
    app.listen(PORT, console.log(`server running on port ${PORT}`));
  } catch (error) {
    console.error(error.response.data);
  }
};

startServer();
