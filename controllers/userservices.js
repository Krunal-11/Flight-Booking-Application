const userModel = require("../models/userqueries");

const bcrypt = require("bcrypt");
const { createtoken } = require("../middleware/jwt");

exports.postUserRegister = async (req, res) => {
  const { email, username, password, phone } = req.body;
  try {
    let hash = await bcrypt.hash(password, 10);

    await userModel.postUserRegister(email, username, hash, phone);

    return res.send("user registered !");
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

    const token = createtoken(user[0]);
    res.cookie("user-token", token, {
      maxAge: 60 * 60 * 24 * 30 * 1000,
    });
    console.log("login success");
    res.status(200).send("login success user !");
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
  const { departure_loc_id, arrival_loc_id, trip_date, number_of_people } =
    req.body;
  try {
    const result = await userModel.postSearchFlights(
      departure_loc_id,
      arrival_loc_id,
      trip_date,
      number_of_people
    );
    res.send(result[0]);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
