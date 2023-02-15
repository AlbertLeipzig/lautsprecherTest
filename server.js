import express from 'express';

const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();

const PORT = 5000;
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

/* import EmailSender from './methods/nodemailer.js'; */

const mongoUri = process.env.MONGOURI;

// middleware

/* app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); */

//routes
const baseApi = '/api/v1';
app.use(`${baseApi}/bands`, bandRoutes);
/* 

app.use(`${baseApi}/business`, businessRoutes);
app.use(`${baseApi}/events`, eventRoutes);
app.use(`${baseApi}/musicians`, musicianRoutes);
app.use(`${baseApi}/organizers`, organizerRoutes);
app.use(`${baseApi}/venues`, venueRoutes);
app.use(`${baseApi}/user`, singleUserRoutes);
app.use(`${baseApi}/message`, messageRoutes); */

// start server

app.get('/', (req, res) => {
  res.send('Hello World! 10');
});
const startServer = async () => {
  try {
    await dbConnection(mongoUri);
    app.listen(PORT, console.log(`server running on port ${PORT}`));
  } catch (error) {
    console.error(error.response.data);
  }
};

startServer();
