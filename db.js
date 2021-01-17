const mongoose = require("mongoose");
const config = require("./config");

let URI_DB;
if (config.mode === "production") {
  URI_DB = config.uriDb;
} else {
  URI_DB = "mongodb://db/task";
}

mongoose
  .connect(URI_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => {
    console.log(err);
  });
