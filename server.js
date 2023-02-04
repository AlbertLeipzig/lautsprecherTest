import express from 'express';

const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const PORT = 5000;
import dbConnection from './db/dbConnection.js';
import musicianRoutes from './routes/musicianRoutes.js';
import bandRoutes from './routes/bandRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import venueRoutes from './routes/venueRoutes.js';
import organizerRoutes from './routes/organizerRoutes.js';
import businessRoutes from './routes/businessRoute.js';
import singleUserRoutes from './routes/singleUserRoutes.js';

// connectDB

const mongoUri = process.env.MONGOURI;

// middleware

app.use(express.json());
app.use(cors());

//routes
const baseApi = '/api/v1';

const testRoute = (req, res) => {
  res.send('test route');
};

app.get('/test', testRoute);

app.use(`${baseApi}/bands`, bandRoutes);
app.use(`${baseApi}/business`, businessRoutes);
app.use(`${baseApi}/events`, eventRoutes);
app.use(`${baseApi}/musicians`, musicianRoutes);
app.use(`${baseApi}/organizers`, organizerRoutes);
app.use(`${baseApi}/venues`, venueRoutes);
app.use(`${baseApi}/user`, singleUserRoutes);

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
