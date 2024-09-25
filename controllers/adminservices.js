const adminModel = require("../models/adminqueries");

const bcrypt = require("bcrypt");
const { createtoken } = require("../middleware/jwt");

exports.getLocations = async (req, res) => {
  try {
    const data = await adminModel.getLocations();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
exports.getLocationsByID = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await adminModel.getLocationsByID(id);
    res.json(data);
  } catch (err) {
    res.send(err);
  }
};

exports.postLocations = async (req, res) => {
  const data = req.body;
  try {
    const result = await adminModel.postLocations(data);
    res.status(201).send("added successfully");
  } catch (err) {
    res.send(err);
  }
};

exports.putLocations = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  console.log(id);
  try {
    const result = await adminModel.putLocations(data, id);
    res.send("data updated successfully");
  } catch (err) {
    res.send(err);
  }
};

exports.deleteLocations = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await adminModel.deleteLocations(id);
    res.send(" deleted successfully");
  } catch (err) {
    res.send(err);
  }
};

exports.getAirplanes = async (req, res) => {
  try {
    const data = await adminModel.getAirplanes();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

exports.postAirplanes = async (req, res) => {
  const data = req.body;
  try {
    const result = await adminModel.postAirplanes(data);
    res.status(201).send("added successfully");
  } catch (err) {
    res.send(err);
  }
};

exports.putAirplanes = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  console.log(id);
  try {
    const result = await adminModel.putAirplanes(data, id);
    res.send("data updated successfully");
  } catch (err) {
    res.send(err);
  }
};

exports.deleteAirplanes = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await adminModel.deleteAirplanes(id);
    res.send(" deleted successfully");
  } catch (err) {
    res.send(err);
  }
};

exports.getAllTrips = async (req, res) => {
  try {
    const result = await adminModel.getAllTrips();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.putTrip = async (req, res) => {
  const data = req.body;
  const id = req.params.id;
  try {
    const result = await adminModel.putTrip(data, id);
    res.status(201).send("data updated successfully");
  } catch (err) {
    res.send(err);
  }
};

exports.deleteTrip = async (req,res)=>{
  const id = req.params.id;
  try{
    const result = await adminModel.deleteTrip(id);
    res.status(200).send("trip deleted Successfully");
  }catch(err){
    res.send(err);
  }
}

exports.getAllBookings = async (req, res) => {
  try {
    const result = await adminModel.getAllBookings();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

// admin crud on the users table -- start

exports.getAllAdmins = async (req, res) => {
  try {
    const result = await adminModel.getAllAdmins();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const result = await adminModel.getAllUsers();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.postAdminRegister = async (req, res) => {
  const { email, username, password, phone } = req.body;
  try {
    let hash = await bcrypt.hash(password, 10);

    await adminModel.postAdminRegister(email, username, hash, phone);

    return res.send("admin registered !");
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(400).send("Username or email already exists.");
    }
    console.error(err);
    return res.status(500).send("Internal server error.");
  }
};

exports.postAdminLogin = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    const [user] = await adminModel.postAdminLogin(username);

    if (!user) {
      return res.status(400).send("Admin doesn't exist");
    }

    const dbpassword = user[0].password;
    const match = await bcrypt.compare(password, dbpassword);
    if (!match) {
      return res.status(400).send("Password is incorrect");
    }

    const token = createtoken(user[0]);
    res.cookie("admin-token", token, {
      maxAge: 60 * 60 * 24 * 30 * 1000,
    });
    console.log("login success");
    res.status(200).send("login success !");
  } catch (err) {
    res.status(500).send("Invalid credentials");
  }
};

exports.putUpdateAdmin = async (req, res) => {
  const id = req.params.id;
  const { email, username, password, phone } = req.body;

  if (!username || !password || !email || !phone) {
    return res.status(400).send("All fields are required");
  }
  try {
    let hash = await bcrypt.hash(password, 10);
    await adminModel.putUpdateAdmin(id, email, username, hash, phone);
    res.send("the details have updated");
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.putDeleteAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    await adminModel.putDeleteAdmin(id);
    res.send("the admin is deleated !");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

// admin crud on the users table -- end
