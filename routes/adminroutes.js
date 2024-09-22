const express = require("express");
const router = express.Router();
const adminServices = require("../controllers/adminservices");
const { middleware_admin } = require("../middleware/jwt");

router.get("/locations", adminServices.getLocations);
router.post("/locations", adminServices.postLocations);
router.put("/locations/:id", adminServices.putLocations);
router.delete("/locations/:id", adminServices.deleteLocations);
router.get("/airplanes", adminServices.getAirplanes);
router.post("/airplanes", adminServices.postAirplanes);
router.put("/airplanes/:id", adminServices.putAirplanes);
router.delete("/airplanes/:id", adminServices.deleteAirplanes);

//admin users table crud - start
router.get("/view-admins", adminServices.getAllAdmins);
router.get("/view-users", adminServices.getAllUsers);
router.post("/register", adminServices.postAdminRegister);
router.post("/login", adminServices.postAdminLogin);
router.put("/update-admin/:id", adminServices.putUpdateAdmin);
router.delete("/delete-admin/:id", adminServices.putDeleteAdmin);
//admin users table crud - end

router.get("/trips", adminServices.getAllTrips);
router.put("/trips/:id", adminServices.putTrip);
router.delete('/trip/:id',adminServices.deleteTrip);



router.get("/booking", adminServices.getAllBookings);

module.exports = router;
