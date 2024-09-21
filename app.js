const express = require('express')
const app = express();
const db = require('./db')


app.get('/',(req,res)=>{
    res.send('test sucessful');
})

app.listen(8080, ()=>{
    console.log('app live at http://localhost:8080/');
})