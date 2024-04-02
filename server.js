require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./Routers/Route");
const cors = require("cors");
require("./Database/Dbconn");

app.use(express.json());
app.use(cors());
app.use("/api/", router);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Started Successfully in the port ${PORT}`);
});
