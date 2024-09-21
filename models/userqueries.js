const db = require("../config/db");

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
  trip_date
) => {
  try {
    const [result] = db.query();
    return result[0];
  } catch (err) {
    throw err;
  }
};
