const mongoose = require("mongoose");

exports.Dbconnect = () => {
  mongoose
    .connect(
      "mongodb+srv://webdevelopment865:7E9hPq3xsz7eocva@cluster0.wfqxcss.mongodb.net/Todo"
    )
    .then(() => {
      console.log("db connected");
    });
};
