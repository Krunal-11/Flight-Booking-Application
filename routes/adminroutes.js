const express = require("express");
const router = express.Router();
const adminServices = require("../controllers/adminservices");

router.get("/locations", adminServices.getLocations);
router.post("/locations", adminServices.postLocations);
router.put("/locations/:id", adminServices.putLocations);
router.delete("/locations/:id", adminServices.deleteLocations);

router.get("/view-admins", adminServices.getAllAdmins);

module.exports = router;
