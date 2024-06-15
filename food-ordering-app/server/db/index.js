const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://shubh:wpaoZCbt5wkAxTI0@cluster0.wzdehhl.mongodb.net/food-ordering",
    { useNewUrlParser: true }
  )
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
