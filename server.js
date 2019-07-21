const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.set("trust proxy", function(ip) {
  if (ip === "127.0.0.1") return true;
  else return false;
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  "mongodb://skiel:abc123abc@ds253537.mlab.com:53537/heroku_dkjqnstq",
  { useNewUrlParser: true }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.listen(process.env.PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
