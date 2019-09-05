const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
//const uri = 'mongodb://localhost:27017/pochat';

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succes");
});

const chatRouter = require('./routes/chat');
const chatListRouter = require('./routes/chatList');

app.use('/chat',chatRouter);
app.use('/chatList',chatListRouter);

app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
