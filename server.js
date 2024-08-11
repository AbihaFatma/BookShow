const express = require("express");
const app = express();
const cors = require("cors");
const ticketRoutes = require("./routes");
import dotenv from "dotenv";
dotenv.config()

const connectDB = require("./dbConnection");
const Ticket = require("./schema");

app.use(cors());
app.use(express.json());
connectDB();
app.use("/api", ticketRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is listening ${PORT}`);
});
