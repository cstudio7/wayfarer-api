import express from 'express';
import Trip from '../controllers/trips';

const router = express.Router();

// Trips routes
router.get('/trips', Trip.getAllTrips);
router.get('/trips/:tripId', Trip.getOneTrip);


export default router;
