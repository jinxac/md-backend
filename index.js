const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));


const models = require("./models");

models.sequelize.sync()
  .then(() => {
    console.log("database looks fine")
  })
  .catch((error) => {
    console.log("something went wrong", error);
  })

require("./routes")(app);

app.get("*", (req, res) => {
  res.status(200).send({
    message: "No End point"
  })
});