const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// -----------------------------------------------------------------------------

function goScan() {
  location.href = "/scan.html";
}

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/scan", function(req, res) {
  res.sendFile(__dirname + "/scan.html");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
