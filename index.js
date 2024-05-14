const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("Server is running...");
});
app.get("/css", (req, res) => {
  res.sendFile("index.css", { root: __dirname + "/public" });
});
app.get("/js", (req, res) => {
  res.sendFile("script.js", { root: __dirname + "/public" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
