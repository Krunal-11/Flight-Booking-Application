const express = require('express');
const router = express.Router();
const adminServices = require('../controllers/adminservices');


router.get('/locations',adminServices.getLocations);
router.post('/locations',adminServices.postLocations);
router.put('/locations/:id',adminServices.putLocations);

module.exports = router;