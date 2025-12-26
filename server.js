const express = require("express");
const connectDb = require("./config/dbConnections");
const dotenv = require("dotenv").config();


const app = express();
const port = parseInt(process.env.PORT); // safe int extraction 

connectDb(); // database connection made 

app.use(express.json());

app.use("/markham", require("./routes/markhamRoutes")); // app connected to routes 

app.listen(port, () => {
  console.log("server is live janab at", port);
}); // server started 
