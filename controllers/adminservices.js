const adminModel = require("../models/adminqueries");

const bcrypt = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");

exports.getLocations = async (req, res) => {
  try {
    const data = await adminModel.getLocations();
    res.send(data);
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




exports.getAllTrips = async(req,res)=>{
  try{
  const result = await adminModel.getAllTrips();
  res.send(result);
  }catch(err){
    res.status(500).send(err);
  }
}

exports.putTrip= async(req,res)=>{
  const data = req.body;
  const id = req.params.id;
  try {
    const result = await adminModel.putTrip(data,id);
    res.status(201).send("data updated successfully");
  } catch (err) {
    res.send(err);
  }
}

exports.getAllBookings = async (req,res)=>{
  try{
    const result = await adminModel.getAllBookings();
    res.send(result);
  }catch(err){
    res.send(err);
  }
}