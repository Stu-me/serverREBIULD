const express = require("express");
const connectDb = require("./config/dbConnections");
const dotenv = require("dotenv").config();


const app = express();
const port = parseInt(process.env.PORT);
connectDb();


app.use(express.json());
app.use("/markham", require("./routes/markhamRoutes"));
app.listen(port, () => {
  console.log("server is live janab at", port);
});
