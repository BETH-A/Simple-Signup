const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {





  res.render("lists", {

  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
