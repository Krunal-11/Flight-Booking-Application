const express = require("express");
const app = express();
const adminroutes = require("./routes/adminroutes");
const userroutes = require("./routes/userroutes");
const cookieParser = require("cookie-parser");
const cors = require('cors');



// Middleware setup
app.use(cors({
  origin: 'http://localhost:3000', // Allow your frontend origin
  methods: ['GET', 'POST'], // Allow necessary methods
  allowedHeaders: ['Content-Type'], // Allow necessary headers
}));
app.use(cookieParser());

app.use(express.json());
app.use("/api/admin", adminroutes);
app.use("/api/user", userroutes);

app.get("/api/test",(req,res)=>{
  res.json({"users":["krunal","keerthan","ramprasad","admin"]});
})

app.listen(8080, () => {
  console.log("app live at http://localhost:8080/");
});
