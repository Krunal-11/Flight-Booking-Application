const db = require("../config/db");


exports.getUserByEmail = async (email) => {
    // console.log(email);
    try {
      const [result] = await db.query('SELECT user_id, username, email, phone, role FROM users WHERE email = ?', [email]);
      return result.length > 0 ? result[0] : null; 
    } catch (err) {
      throw err; 
    }
  };