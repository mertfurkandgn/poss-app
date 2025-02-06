const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const port = 5000;

dotenv.config();


const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mertfurkandgn1912:Mert.ksk123@cluster0.gcqod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MONGO DB BAĞLANDI")
  } catch (error) {
    throw error;
  }
};

app.listen(port, () => {
    connect();
  console.log(`Example app listening ons port ${port}`);
});
