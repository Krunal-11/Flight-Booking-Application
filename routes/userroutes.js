const express = require("express");
const router = express.Router();

const userServices = require("../controllers/userservices");
const { middleware_user } = require("../middleware/jwt");

router.post("/register", middleware_user, userServices.postUserRegister);
router.post("/login", userServices.postUserLogin);

router.post("/search-flights", userServices.postSearchFlights);
router.get("/search-flights/:id", userServices.postSearchFlightsID);

router.get("/info/:email", userServices.getUserByEmail);
router.get("/bookings/:email", userServices.getAllBookings);

module.exports = router;
