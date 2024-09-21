const express = require("express");
const router = express.Router();
const userServices = require("../controllers/userservices");

router.get('/info/:email',userServices.getUserByEmail);
router.get('/bookings/:email',userServices.getAllBookings);

module.exports = router;    