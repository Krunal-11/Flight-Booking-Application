const express = require('express')
const app = express();
const adminroutes = require('./routes/adminroutes')
const userroutes = require('./routes/userroutes')



app.use(express.json());
app.use('/api/admin',adminroutes);
app.use('/api/user',userroutes)





app.listen(8080, ()=>{
    console.log('app live at http://localhost:8080/');
})