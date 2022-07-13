const express = require('express');
const mongoose = require("mongoose");
const Router = require("./routes")
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const {DATABASE_USERNAME, 
    DATABASE_PASSWORD, 
    DATABASE_CLUSTER, 
    DATABASE_NAME
} = process.env



mongoose.connect(
    `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_CLUSTER}.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(PORT, console.log(`Server is running in port ${PORT}`))