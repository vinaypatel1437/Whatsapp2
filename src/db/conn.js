const mongoose = require("mongoose");

const DB = process.env.SecretKey;

mongoose.set("strictQuery", true);
mongoose.connect(DB).then(() => {
    console.log("connection is successful");
  })
  .catch((e) => {
    console.log("no connection");
  });