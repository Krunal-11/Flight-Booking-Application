const userModel = require("../models/userqueries");

exports.getUserByEmail = async (req, res) => {
    const email = req.params.email; 
  
    try {
      const user = await userModel.getUserByEmail(email); 
  
      if (user) {
        res.status(200).json(user); 
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };


  exports.getAllBookings= async (req, res) => {
    const email = req.params.email; 
  
    try {
      const bookings = await userModel.getAllBookings(email);
  
      if (bookings.length > 0) {
        res.status(200).json(bookings);
      } else {
        res.status(404).json({ message: 'No bookings found for this user.' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };