const express = require("express");
const router = express.Router();
const userServices = require("../controllers/userservices");

router.get('/info/:email',userServices.getUserByEmail);


module.exports = router;    