const express = require("express");
const router = express.Router();

const userServices = require("../controllers/userservices");
const { middleware_user } = require("../middleware/jwt");

router.post("/register", middleware_user, userServices.postUserRegister);
router.post("/login", userServices.postUserLogin);
// router.put("/update-user/:id", userServices.putUpdateUser);
// router.delete("/delete-user/:id", userServices.putDeleteUser);

router.get("/info/:email", userServices.getUserByEmail);
router.get("/bookings/:email", userServices.getAllBookings);

module.exports = router;
