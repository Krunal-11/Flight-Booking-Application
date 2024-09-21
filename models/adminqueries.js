const db = require('../config/db')



exports.getLocations = async ()=>{
    const query='SELECT * from locations';
    try{
        const [data] = await db.query(query);
        return data;
    }
    catch(error){
        throw error;
    }
}


exports.postLocations = async (data)=>{
    try{
        const [result] = await  db.query('INSERT INTO locations(airport_name, city_name, iata_code) VALUES (?,?,?)',[data.airport_name,data.city_name, data.iata_code]);
        return result;
    }
    catch(err){
        throw err;
    }

}