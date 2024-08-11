const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to Database");
  } catch (err) {
    console.log("Database connection error:",err);
  }
}
module.exports=connectDB

