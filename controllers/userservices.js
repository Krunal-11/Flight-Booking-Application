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