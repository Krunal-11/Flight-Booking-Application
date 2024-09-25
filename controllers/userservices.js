const userModel = require("../models/userqueries");
const nodemailer = require('nodemailer');
const bcrypt = require("bcrypt");
const { createtoken } = require("../middleware/jwt");

exports.postUserRegister = async (req, res) => {
  const { email, username, password, phone } = req.body;
  try {
    let hash = await bcrypt.hash(password, 10);

    await userModel.postUserRegister(email, username, hash, phone);

    const [user] = await userModel.postUserLogin(username);

    const token = createtoken(user[0]);

    return res.status(201).json({
      message: "User registered!",
      token, // Send the token back for automatic login
    });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(400).send("Username or email already exists.");
    }
    console.error(err);
    return res.status(500).send("Internal server error.");
  }
};

exports.postUserLogin = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const [user] = await userModel.postUserLogin(username);
    if (!user) {
      return res.status(400).send("User doesn't exist");
    }

    const dbpassword = user[0].password;
    const match = await bcrypt.compare(password, dbpassword);
    if (!match) {
      return res.status(400).send("Password is incorrect");
    }
    //console.log(user[0]);

    const token = createtoken(user[0]);
    res.cookie("user-token", token, {
      maxAge: 60 * 60 * 24 * 30 * 1000,
    });
    console.log("login success");
    return res.status(200).json({
      message: 'Login successful',
      token, // Send the token back
    });
  } catch (err) {
    res.status(500).send("Invalid credentials");
  }
};

exports.getUserByEmail = async (req, res) => {
  const email = req.params.email;

  try {
    const user = await userModel.getUserByEmail(email);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getAllBookings = async (req, res) => {
  const email = req.params.email;

  try {
    const bookings = await userModel.getAllBookings(email);

    if (bookings.length > 0) {
      res.status(200).json(bookings);
    } else {
      res.status(404).json({ message: "No bookings found for this user." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.postSearchFlights = async (req, res) => {
  console.log('api called');
  const { departure_loc_id, arrival_loc_id, trip_date, number_of_people } =
    req.body;
  try {
    const result = await userModel.postSearchFlights(
      departure_loc_id,
      arrival_loc_id,
      trip_date,
      number_of_people
    );
    // res.send({
    //   ...result[0],
    //   number_of_people,
    // });
    res.json({
      trips:result[0],
      number_of_people:number_of_people,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.postSearchFlightsID = async (req, res) => {
  const id = req.params.id;
  const people = req.params.people;

  try {
    const result = await userModel.postSearchFlightsID(id);
    res.send({ ...result[0], people });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.sendMail = (req,res)=>{
  const data = req.body;
  try{
    
const sendConfirmationEmail = (userEmail, bookingDetails) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'newmailforgradious@gmail.com',
      pass: 'wrba ytcb upft zrwn',
    },
  });

  const mailOptions = {
    from: 'newmailforgradious@gmail.com',
    to: userEmail,
    subject: 'Booking Confirmation',
    text: `Thank you for your booking! Here are your booking details: ${bookingDetails}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error: ', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

sendConfirmationEmail(data.email, data.details);
res.send('sent');

  }
  catch(err){
    res.send(err);
  }
}


exports.postBooking = (req,res)=>{
  const data = req.body;
  try{
    const [result] = userModel.postBooking(data);
    res.send('booking added to booking table');
  }
  catch(err){
    return err;
  }
}

exports.postTravellers = (req,res)=>{
  const data = req.boady;
  try{
    const [result] = userModel.postTravellers(data);
    console.log(result);
    res.send(result);
  }
  catch(err){
    return err;
  }
}


// exports.checkout = async(req,res)=>{
//   const email = req.params.email;
//   const data = req.body;
//   try{
//     const result = await userModel.checkout(data,email);
//     //data-> number of traverllers,trip id
//     //need to update count of seats filled, number of seats empty, send traveller info ahead to checkout page and after confirmation api is called it should be inserted into db,

//   }
//   catch(err){
//     res.send(err);
//   }
// }