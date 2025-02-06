const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const port = 5000;



const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB BAĞLANDI")
  } catch (error) {
    throw error;
  }
};

app.listen(port, () => {
    connect();
  console.log(`Example app listening ons port ${port}`);
});
