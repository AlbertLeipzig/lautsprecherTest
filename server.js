import express from 'express';

const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
import dbConnection from './db/dbConnection.js';
import musicianRoutes from './routes/musicianRoutes.js';
import bandRoutes from './routes/bandRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import venueRoutes from './routes/venueRoutes.js';
import organizerRoutes from './routes/organizerRoutes.js';
import businessRoutes from './routes/businessRoute.js';

// connectDB

const mongoUri = process.env.MONGOURI;

// middleware

app.use(cors());
app.use(express.json());

//routes
const baseApi = '/api/v1';

app.use(`${baseApi}/bands`, bandRoutes);
app.use(`${baseApi}/business`, businessRoutes);
app.use(`${baseApi}/events`, eventRoutes);
app.use(`${baseApi}/musicians`, musicianRoutes);
app.use(`${baseApi}/organizers`, organizerRoutes);
app.use(`${baseApi}/venues`, venueRoutes);

// start server

const startServer = async () => {
  try {
    await dbConnection(mongoUri);
    app.listen(PORT, console.log(`server running on port ${PORT}`));
  } catch (error) {
    console.error({ error });
  }
};

startServer();
