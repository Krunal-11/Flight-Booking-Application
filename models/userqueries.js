const db = require("../config/db");

exports.getEmail = async(username)=>{
  try{
    const [result] = await db.query("SELECT email from users where username=? ",[username]);
    return result;
  }
  catch(err){
    throw err;
  }
}

exports.postUserRegister = async (email, username, hash, phone) => {
  try {
    const [result] = await db.query(
      "INSERT INTO users(email, username, password, phone, role) VALUES (?, ?, ?, ?, ?)",
      [email, username, hash, phone, 2]
    );
  } catch (err) {
    throw err;
  }
};

exports.postUserLogin = async (username) => {
  try {
    const result = await db.query(
      "Select * from users where username = ? and role = ?",
      [username, 2]
    );
    return result;
  } catch (err) {
    throw err;
  }
};

exports.getUserByEmail = async (email) => {
  // console.log(email);
  try {
    const [result] = await db.query(
      "SELECT user_id, username, email, phone, role FROM users WHERE email = ?",
      [email]
    );
    return result.length > 0 ? result[0] : null;
  } catch (err) {
    throw err;
  }
};

exports.getAllBookings = async (email) => {
  try {
    const [result] = await db.query(
      `
        SELECT 
          b.booking_date,
          dl.airport_name AS departure_location,
          al.airport_name AS arrival_location,
          t.departure_time,
          t.arrival_time,
          t.trip_date
        FROM bookings b
        JOIN trips t ON b.trip_id = t.trip_id
        JOIN locations dl ON t.departure_loc_id = dl.loc_id
        JOIN locations al ON t.arrival_loc_id = al.loc_id
        WHERE b.email = ?
        ORDER BY b.booking_date DESC;
      `,
      [email]
    );

    return result;
  } catch (err) {
    throw err;
  }
};

exports.postSearchFlights = async (
  departure_loc_id,
  arrival_loc_id,
  trip_date,
  number_of_people
) => {
  try {
    const result = db.query(
      `SELECT 
        t.*, 
        ld.airport_name AS departureAirportName, 
        ld.iata_code AS departureIataCode, 
        ld.city_name AS departureCityName,
        la.airport_name AS arrivalAirportName, 
        la.iata_code AS arrivalIataCode, 
        la.city_name AS arrivalCityName
      FROM trips t 
      JOIN locations ld ON t.departure_loc_id = ld.loc_id 
      JOIN locations la ON t.arrival_loc_id = la.loc_id 
      WHERE t.departure_loc_id = ? 
        AND t.arrival_loc_id = ? 
        AND t.trip_date = ? 
        AND t.number_of_empty_seats >= ?`,
      [departure_loc_id, arrival_loc_id, trip_date, number_of_people]
    );
    return result;
  } catch (err) {
    throw err;
  }
};


exports.postSearchFlightsID = async (id) => {
  try {
    const result = db.query(
      "SELECT t.*, ld.airport_name AS airportName,ld.iata_code, la.city_name AS cityName, ap.airplane_name AS airplaneName, ap.number_of_seats AS TotalseatesOnPlain FROM trips t JOIN locations ld ON t.departure_loc_id = ld.loc_id JOIN locations la ON t.arrival_loc_id = la.loc_id JOIN airplanes ap ON t.airplane_id = ap.airplane_id WHERE t.trip_id=?",
      [id]
    );
    return result;
  } catch (err) {
    throw err;
  }
};


exports.postBooking = async (data) =>{
  try{
    const result= db.query('INSERT INTO bookings (trip_id, user_id, email, booking_date) VALUES (?, ?, ?, NOW());',[data.trip_id,data.user_id,data.email]);
    return result;
  }
  catch(err){
    throw err;
  }
}

exports.postTravellers = async(data)=>{
  try{
    const result = db.query('INSERT INTO travellers(name, age, gender, trip_id) VALUES (?,?,?,?);',[data.name, data.age,data.gender,data.trip_id])
  }
  catch(err){
    throw err;
  }
}