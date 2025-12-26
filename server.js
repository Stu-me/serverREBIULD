const express = require("express");
const connectDb = require("./config/dbConnections");
const dotenv = require("dotenv").config();
const errorHandler = require("./middlewares/errorHandler")

const app = express();
const port = parseInt(process.env.PORT); // safe int extraction 

connectDb(); // database connection made 

app.use(express.json());

app.use("/markham", require("./routes/markhamRoutes")); // app connected to routes 

app.use(errorHandler); // we made the errorHandler global and now wherever the error is thrown it will be handled in it 

app.listen(port, () => {
  console.log("server is live janab at", port);
}); // server started 
