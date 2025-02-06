const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

//routes 
const categoryRoute = require('./routes/categories.js');




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


app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);



app.listen(port, () => {
    connect();
  console.log(`Example app listening ons port ${port}`);
});
