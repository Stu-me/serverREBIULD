const express = require('express');
const connectDb = require('./config/dbConnections');
const dotenv = require('dotenv').config();

connectDb();
const app = express();
const port = process.env.port;

app.use(express.json());
app.use("/markham",require("./routes/markhamRoutes"));

app.listen(port,()=>{
    console.log("server is live janab at",port);
})