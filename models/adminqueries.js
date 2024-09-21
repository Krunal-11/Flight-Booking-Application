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

exports.getAllTrips = async ()=>{
  try{
    const [result]= await db.query("Select * from  trips ");
     return result;
  }catch(err){
    throw err;
  }
};

exports.putTrip = async (data, tripId) => {  //details must contain airplane_name, dept_airportname, arrivl_airportname instead of their ids
  try {

    const [airplaneResult] = await db.query(
      "SELECT airplane_id FROM airplanes WHERE airplane_name = ?",
      [data.airplane_name]
    );
    

    if (airplaneResult.length === 0) {
      throw new Error(`Airplane "${data.airplane_name}" not found`);
    }
    const airplane_id = airplaneResult[0].airplane_id;


    const [departureResult] = await db.query(
      "SELECT loc_id FROM locations WHERE airport_name = ?",
      [data.departure_location_name]
    );
    const [arrivalResult] = await db.query(
      "SELECT loc_id FROM locations WHERE airport_name = ?",
      [data.arrival_location_name]
    );

    if (departureResult.length === 0) {
      throw new Error(`Departure location "${data.departure_location_name}" not found`);
    }
    if (arrivalResult.length === 0) {
      throw new Error(`Arrival location "${data.arrival_location_name}" not found`);
    }

    const departure_loc_id = departureResult[0].loc_id;
    const arrival_loc_id = arrivalResult[0].loc_id;

    const [result] = await db.query(
      `UPDATE trips SET  airplane_id = ?, departure_loc_id = ?, arrival_loc_id = ?,   number_of_seats_filled = ?, number_of_empty_seats = ?, departure_time = ?, arrival_time = ?,  trip_date = ?,  price = ?,  flight_status = ?,  delay_hours = ?,  trip_duration = ?  WHERE trip_id = ?`,
      [ airplane_id,  departure_loc_id,  arrival_loc_id, data.number_of_seats_filled, data.number_of_empty_seats, data.departure_time,  data.arrival_time, data.trip_date, data.price,data.flight_status, data.delay_hours,  data.trip_duration,  tripId ]
    );

    return result;

  } catch (err) {
    throw err;
  }
};


exports.getAllBookings = async () => {
  try {
    const [result] = await db.query(`
      SELECT 
        b.booking_id,
        b.email,
        b.trip_id,
        b.booking_date,a.airplane_name, dl.airport_name AS departure_location,al.airport_name AS arrival_location,t.departure_time, t.arrival_time, t.trip_date
      FROM bookings b
      JOIN trips t ON b.trip_id = t.trip_id
      JOIN locations dl ON t.departure_loc_id = dl.loc_id
      JOIN locations al ON t.arrival_loc_id = al.loc_id
      JOIN airplanes a ON t.airplane_id = a.airplane_id ORDER BY b.booking_date DESC;
    `);
    
    return result; 
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error; 
  }
};

