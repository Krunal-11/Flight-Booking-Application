const adminModel = require('../models/adminqueries')

exports.getLocations = async (req,res)=>{
    try{
        const data = await adminModel.getLocations();
        res.send(data);
    }catch(err){
        res.send(err);
    }  
}

exports.postLocations = async (req,res)=>{
    const data = req.body;
    try{
        const result = await adminModel.postLocations(data);
        res.status(201).send('added successfully')
    }
    catch(err){
        res.send(err);
    }
}