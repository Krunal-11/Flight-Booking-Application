const adminModel = require("../models/adminqueries");

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
