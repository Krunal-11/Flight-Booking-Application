const db = require("../config/db");

exports.getLocations = async () => {
  const query = "SELECT * from locations";
  try {
    const [data] = await db.query(query);
    return data;
  } catch (error) {
    throw error;
  }
};

exports.postLocations = async (data) => {
  try {
    const [result] = await db.query(
      "INSERT INTO locations(airport_name, city_name, iata_code) VALUES (?,?,?)",
      [data.airport_name, data.city_name, data.iata_code]
    );
    return result;
  } catch (err) {
    throw err;
  }
};

exports.putLocations = async (data, id) => {
  try {
    const [result] = await db.query(
      "UPDATE locations SET airport_name=?, city_name=?,iata_code=? WHERE loc_id=?",
      [data.airport_name, data.city_name, data.iata_code, id]
    );
    return result;
  } catch (err) {
    throw err;
  }
};

exports.deleteLocations = async (id) => {
  try {
    const [result] = await db.query("DELETE FROM locations where loc_id=?", [
      id,
    ]);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.getAirplanes = async () => {
  const query = "SELECT * from airplanes";
  try {
    const [data] = await db.query(query);
    return data;
  } catch (error) {
    throw error;
  }
};

exports.postAirplanes = async (data) => {
  try {
    const [result] = await db.query(
      "INSERT INTO airplanes(airplane_name, number_of_seats) VALUES (?,?)",
      [data.airplane_name, data.number_of_seats]
    );
    return result;
  } catch (err) {
    throw err;
  }
};

exports.putAirplanes = async (data, id) => {
  try {
    const [result] = await db.query(
      "UPDATE airplanes SET airplane_name=?, number_of_seats=? WHERE airplane_id=?",
      [data.airplane_name, data.number_of_seats,id]
    );
    return result;
  } catch (err) {
    throw err;
  }
};

exports.deleteAirplanes = async (id) => {
  try {
    const [result] = await db.query("DELETE FROM airplanes where airplane_id=?", [
      id,
    ]);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.getAllAdmins = async () => {
  try {
    const [result] = await db.query("Select * from users where role = ?", [1]);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.getAllUsers = async () => {
  try {
    const [result] = await db.query("Select * from users where role = ?", [2]);
    //console.log(result);
    return result;
  } catch (err) {
    //console.log(err);
    throw err;
  }
};

exports.postAdminRegister = async (email, username, hash, phone) => {
  try {
    const [result] = await db.query(
      "INSERT INTO users(email, username, password, phone, role) VALUES (?, ?, ?, ?, ?)",
      [email, username, hash, phone, 1]
    );
    //console.log(result);
    //return result;
  } catch (err) {
    //console.log(err);
    throw err;
  }
};
